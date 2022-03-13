import React, { memo, ReactElement } from "react";
import IMessage from "../../../interfaces/IMessage";
import { StyledDiv } from "../ChatMessages/style";
import ChatMessage from "./../ChatMessage";

const ChatMessages = ({ messages }: { messages: IMessage[] }): ReactElement => {
  return (
    <div>
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
    </div>
  );
};

export default memo(ChatMessages);
