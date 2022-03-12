import styled from "@emotion/styled";
import React, { ReactElement, useState } from "react";
import ChatMessages, { QUERY } from "./ChatMessages";
import { useQuery, useMutation, gql } from "@apollo/client";

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

const ChatBox = (): ReactElement => {
  const [postMessageMutation, { data, error }] = useMutation(MUTATION, {
    refetchQueries: [{ query: QUERY }],
  });
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    postMessageMutation({
      variables: { channelId: "General", text: message, userId: "Sam" },
      // optimisticResponse: true,
    });
    setMessage("");
  };

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <StyledDiv>
      {/*  */}
      <ChatMessages />
      {/*  */}

      {/*  */}
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
      {/*  */}
    </StyledDiv>
  );
};

export default ChatBox;
