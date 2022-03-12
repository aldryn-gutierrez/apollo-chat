import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import ChatMessages from './ChatMessages';

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

const ChatBox = () : ReactElement => {
  return (
    <StyledDiv>
      {/*  */}
      <ChatMessages />
      {/*  */}

      {/*  */}
      <div style={{ 
        width: "100%",
        padding: "10px 0px"
      }}>
        <textarea placeholder='Type your message here...' style={{ fontSize: "1rem", width: "100%", minHeight: "100px", color: "#495057", borderColor: "#ced4da", fontFamily: "Helvetica", marginBottom: ".35em"}} />
        <Button>Send Message</Button>
      </div>
      {/*  */}
    </StyledDiv>
  )
}

export default ChatBox;