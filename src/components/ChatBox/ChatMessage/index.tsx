import React, { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import IMessage from "../../../interfaces/IMessage";
import { useUser } from "../../../contexts/UserContext";
import {
  ChatAvatarImage,
  ChatHourDiv,
  ChatMessageStatusDiv,
  ChatNameDiv,
  ChatTextDiv,
  StyledDiv,
} from "./style";

library.add(faCheckCircle);
library.add(faTimesCircle);

const ChatMessage = ({ message }: { message: IMessage }): ReactElement => {
  const { user: sender } = useUser();
  const isSender = sender === message.userId;

  return (
    <StyledDiv className="chat-left" isSender={isSender}>
      <div className="chat-avatar">
        <ChatAvatarImage />
        <ChatNameDiv>{message.userId}</ChatNameDiv>
      </div>
      <ChatTextDiv isSender={isSender}>{message.text}</ChatTextDiv>
      <ChatHourDiv isSender={isSender}>
        <span>08:55</span>
        {isSender && (
          <ChatMessageStatusDiv>
            {message.messageId != "" ? (
              <>
                <FontAwesomeIcon icon={"check-circle"} color={"green"} />
                <span>Sent</span>
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={"times-circle"} color={"red"} />
                <span>Error</span>
              </>
            )}
          </ChatMessageStatusDiv>
        )}
      </ChatHourDiv>
    </StyledDiv>
  );
};

export default ChatMessage;
