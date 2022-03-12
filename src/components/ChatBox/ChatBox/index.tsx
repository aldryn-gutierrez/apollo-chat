import React, { ReactElement, useEffect, useState } from "react";
import ChatMessages from "./../ChatMessages";
import { useQuery, useMutation, gql, useLazyQuery } from "@apollo/client";
import { useChannel } from "../../../contexts/ChannelContext";
import { useUser } from "../../../contexts/UserContext";
import IMessage from "../../../interfaces/IMessage";
import { Button, StyledDiv } from "./style";
import Cookies from "universal-cookie";

const POST_MESSAGE = gql`
  mutation postMessage(
    $channelId: ChannelId!
    $text: String!
    $userId: UserId!
  ) {
    MessagePost(channelId: $channelId, text: $text, userId: $userId) {
      userId
      text
      datetime
    }
  }
`;

export const GET_MESSAGES = gql`
  query getMessages($channelId: ChannelId!) {
    MessagesFetchLatest(channelId: $channelId) {
      messageId
      text
      datetime
      userId
    }
  }
`;

export const FETCH_MORE_MESSAGE = gql`
  query getMessages(
    $channelId: ChannelId!
    $messageId: String!
    $old: Boolean!
  ) {
    MessagesFetchMore(channelId: $channelId, messageId: $messageId, old: $old) {
      messageId
      text
      datetime
      userId
    }
  }
`;

const ChatBox = (): ReactElement => {
  const { user } = useUser();
  const { channel } = useChannel();
  const [messages, setMessages] = useState(new Array<IMessage>());
  const [message, setMessage] = useState("");

  const { data: queryData } = useQuery(GET_MESSAGES, {
    variables: { channelId: channel },
  });

  useEffect(() => {
    const cookies = new Cookies();
    const lastMessage = cookies.get(`message-${user}`) ?? "";
    setMessage(lastMessage);
  }, [user]);

  useEffect(() => {
    if (queryData?.MessagesFetchLatest) {
      setMessages(queryData.MessagesFetchLatest);
    }
  }, [queryData]);

  const [
    fetchMoreMessages,
    { loading: fetchMoreDataLoading, data: fetchMoreData },
  ] = useLazyQuery(FETCH_MORE_MESSAGE);

  useEffect(() => {
    if (fetchMoreData?.MessagesFetchMore) {
      const unsortedMessages: IMessage[] = [
        ...messages,
        ...fetchMoreData.MessagesFetchMore,
      ];
      const sortedMessage = unsortedMessages.sort((a, b) => {
        return Date.parse(a.datetime) < Date.parse(b.datetime) ? 1 : -1;
      });

      setMessages([...sortedMessage]);
    }
  }, [fetchMoreData]);

  const [postMessageMutation] = useMutation(POST_MESSAGE, {
    refetchQueries: [
      {
        query: GET_MESSAGES,
        variables: { channelId: channel },
      },
    ],
    onError: (error) => {
      alert("GOT ERROR");
      console.log(error);
      const unsetMessage = {
        messageId: "",
        text: message,
        datetime: new Date().toString(),
        userId: user,
      };
      setMessages([unsetMessage, ...messages]);
    },
  });

  const onSubmit = () => {
    postMessageMutation({
      variables: { channelId: channel, text: message, userId: user },
    });
    setMessage("");
  };

  // Save User Text to Cookies
  window.addEventListener("beforeunload", function (e) {
    const cookies = new Cookies();
    cookies.set(`message-${user}`, message, { path: "/" });

    const confirmationMessage = "o/";
    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage; //Webkit, Safari, Chrome
  });

  return (
    <StyledDiv>
      {messages && messages[messages.length - 1] && !fetchMoreDataLoading && (
        <Button
          onClick={() => {
            fetchMoreMessages({
              variables: {
                channelId: channel,
                messageId: messages[messages.length - 1].messageId,
                old: true,
              },
            });
          }}
        >
          Read More
        </Button>
      )}
      <ChatMessages messages={messages} />
      {messages && messages[0] && !fetchMoreDataLoading && (
        <Button
          onClick={() => {
            fetchMoreMessages({
              variables: {
                channelId: channel,
                messageId: messages[0].messageId,
                old: false,
              },
            });
          }}
        >
          Read More
        </Button>
      )}
      <div
        style={{
          width: "100%",
          padding: "10px 0px",
        }}
      >
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Type your message here..."
          style={{
            fontSize: "1rem",
            width: "100%",
            minHeight: "100px",
            color: "#495057",
            borderColor: "#ced4da",
            fontFamily: "Helvetica",
            marginBottom: ".35em",
          }}
        />
        <Button onClick={() => onSubmit()}>Send Message</Button>
      </div>
    </StyledDiv>
  );
};

export default ChatBox;
