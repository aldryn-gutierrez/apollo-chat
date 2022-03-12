import styled from "@emotion/styled";
import React, { ReactElement, useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useQuery, useMutation, gql } from "@apollo/client";
import { useChannel } from "../../contexts/ChannelContext";
import { useUser } from "../../contexts/UserContext";
import IMessage from "../../interfaces/IMessage";

const StyledDiv = styled.div`
  padding: 1rem;
`;

const Button = styled.button`
  background: #17a2b8;
  color: white;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #17a2b8;
  border-radius: 3px;
`;

const MUTATION = gql`
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

export const QUERY = gql`
  query getMessages($channelId: ChannelId!) {
    MessagesFetchLatest(channelId: $channelId) {
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

  const {
    data: queryData,
    // loading: queryLoading,
    // error: queryError,
  } = useQuery(QUERY, {
    variables: { channelId: channel },
  });

  useEffect(() => {
    if (queryData?.MessagesFetchLatest) {
      setMessages(queryData.MessagesFetchLatest);
    }
  }, [queryData]);

  const [postMessageMutation, { error: mutationError }] = useMutation(
    MUTATION,
    {
      refetchQueries: [
        {
          query: QUERY,
          variables: { channelId: channel },
        },
      ],
    }
  );
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    postMessageMutation({
      variables: { channelId: channel, text: message, userId: user },
    });
    setMessage("");
  };

  if (mutationError) {
    const unsetMessage = {
      messageId: "",
      text: message,
      datetime: new Date().toString(),
      userId: user,
    };
    setMessages([...messages, unsetMessage]);
  }

  return (
    <StyledDiv>
      <ChatMessages messages={messages} />
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
