import React, { ReactElement } from "react";

const ChatHeader = (): ReactElement => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h1>1 day chat App</h1>
      <span>All messages will be deleted at every 00:00 UTC</span>
    </div>
  );
};

export default ChatHeader;
