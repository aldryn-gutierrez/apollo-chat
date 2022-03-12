import styled from "@emotion/styled";
import React, { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import IMessage from "../../interfaces/IMessage";
import { useUser } from "../../contexts/UserContext";

library.add(faCheckCircle);
library.add(faTimesCircle);

const StyledDiv = styled.div<{ isSender: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: ${(props) => (props.isSender ? "row-reverse" : "row")};
  margin-bottom: 40px;
`;

const ChatAvatarImage = styled.img`
  width: 48px;
  height: 48px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
`;

ChatAvatarImage.defaultProps = {
  src: "https://angular-test-backend-yc4c5cvnnq-an.a.run.app/Russell.png",
};

const ChatNameDiv = styled.div`
  font-size: 0.75rem;
  color: #999999;
  text-align: center;
`;

const ChatTextDiv = styled.div<{ isSender: boolean }>`
  padding: 0.4rem 1rem;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  background: #ffffff;
  font-weight: 300;
  line-height: 150%;
  position: relative;
  :before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 10px;
    border: 10px solid;
    ${({ isSender }) =>
      isSender
        ? `
    right: -20px;
    border-color: transparent transparent transparent #ffffff;
  `
        : `
    left: -20px;	
    border-color: transparent #ffffff transparent transparent;
  `}
  }
  ${({ isSender }) =>
    isSender
      ? `
  left: -20px;
  border-color: transparent transparent transparent #ffffff;
  right: inherit;
`
      : `
  right: -20px;
  border-color: transparent #ffffff transparent transparent;
  left: inherit;
`}
`;

const ChatHourDiv = styled.div<{ isSender: boolean }>`
  justify-content: flex-end;
  padding: 0;
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${({ isSender }) =>
    isSender
      ? `
    margin-right: 30px;
  `
      : `
    margin-left: 30px;
  `}
`;

const ChatMessageStatusDiv = styled.div`
  font-size: 0.75rem;
  color: #999999;
  text-align: center;
  margin-left: 10px;
`;

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
