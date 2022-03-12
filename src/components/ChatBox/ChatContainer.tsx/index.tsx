import React, { ReactElement } from "react";
import ChannelSelection from "../../Channels/ChannelSelection";
import ClientOnly from "../../ClientOnly";
import UserSelection from "../../Users/UserSelection";
import ChatBox from "../ChatBox";
import ChatBoxTitle from "../ChatBoxTitle";
import { MainDiv, UserDiv, ChatDiv } from "./style";

const ChatContainer = (): ReactElement => {
  return (
    <MainDiv>
      <UserDiv>
        <UserSelection />
        <ChannelSelection />
      </UserDiv>
      <ChatDiv>
        <ChatBoxTitle />
        <ClientOnly>
          <ChatBox />
        </ClientOnly>
      </ChatDiv>
    </MainDiv>
  );
};

export default ChatContainer;
