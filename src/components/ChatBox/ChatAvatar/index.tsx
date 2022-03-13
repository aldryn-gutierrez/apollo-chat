import React, { memo, ReactElement } from "react";
import { ChatAvatarImage, ChatNameDiv } from "./style";

const ChatAvatar = ({ userId }: { userId: string }): ReactElement => {
  return (
    <div>
      <ChatAvatarImage />
      <ChatNameDiv>{userId}</ChatNameDiv>
    </div>
  );
};

export default memo(ChatAvatar);
