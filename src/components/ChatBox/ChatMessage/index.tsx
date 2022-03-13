import React, { memo, ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import IMessage from "../../../interfaces/IMessage";
import { useUser } from "../../../contexts/UserContext";
import {
  ChatHourDiv,
  ChatMessageStatusDiv,
  ChatTextDiv,
  StyledDiv,
} from "./style";
import ChatAvatar from "../ChatAvatar";

library.add(faCheckCircle);
library.add(faTimesCircle);

const ChatMessage = ({ message }: { message: IMessage }): ReactElement => {
  const { user: sender } = useUser();
  const isSender = sender === message.userId;

  return (
    <StyledDiv className="chat-left" isSender={isSender}>
      <ChatAvatar userId={message.userId} />
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

export default memo(ChatMessage);
