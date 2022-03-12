import styled from "@emotion/styled";
import React, { ReactElement } from "react";
import ChatMessage from "./ChatMessage";
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

const ChatMessages = ({ messages }: { messages: IMessage[] }): ReactElement => {
  return (
    <div>
      <Button>Read More</Button>
      <StyledDiv>
        {messages.map((_: IMessage, index: number, messages: IMessage[]) => {
          const currentMessage = messages[messages.length - 1 - index];
          return (
            <ChatMessage
              key={`${currentMessage.messageId}${currentMessage.datetime}`}
              message={currentMessage}
            />
          );
        })}
      </StyledDiv>
      <Button>Read More</Button>
    </div>
  );
};

export default ChatMessages;
