import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import ChatMessage from './ChatMessage';

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

const ChatMessages = () : ReactElement => {
  return (
    <div>
      <Button>Read More</Button>
      <StyledDiv>
        <ChatMessage isSender={false} />
        <ChatMessage isSender={true} />
        <ChatMessage isSender={false} />
      </StyledDiv>
      <Button>Read More</Button>
    </div>
  )
}

export default ChatMessages;