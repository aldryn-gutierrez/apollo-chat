import styled from "@emotion/styled";
import React, { ReactElement } from "react";
import ChatMessage from "./ChatMessage";
import { useQuery, useMutation, gql } from "@apollo/client";
import IMessage from "../../interfaces/IMessage";

const StyledDiv = styled.div`
  padding: 30px 0px 0px 0px;
`;

const Button = styled.button`
  background: #17a2b8;
  color: white;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #17a2b8;
  border-radius: 3px;
`;

export const QUERY = gql`
  query getMessages {
    MessagesFetchLatest(channelId: General) {
      messageId
      text
      datetime
      userId
    }
  }
`;

const ChatMessages = (): ReactElement => {
  const sender = "Joyse";
  const { data, loading, error } = useQuery(QUERY);

  if (loading) return <div>...loading</div>;
  if (error) return <div>error encountered</div>;

  return (
    <div>
      <Button>Read More</Button>
      <StyledDiv>
        {data &&
          data.MessagesFetchLatest.map(
            (_: IMessage, index: number, messages: IMessage[]) => {
              const currentMessage = messages[messages.length - 1 - index];
              return (
                <ChatMessage
                  key={currentMessage.messageId}
                  message={currentMessage}
                />
              );
            }
          )}
      </StyledDiv>
      <Button>Read More</Button>
    </div>
  );
};

export default ChatMessages;
