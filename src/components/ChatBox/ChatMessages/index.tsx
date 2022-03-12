import React, { ReactElement } from "react";
import IMessage from "../../../interfaces/IMessage";
import { StyledDiv, Button } from "../ChatMessages/style";
import ChatMessage from "./../ChatMessage";

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
