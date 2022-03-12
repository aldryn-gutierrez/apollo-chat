import React, { ReactElement } from "react";
import { useChannel } from "../../../contexts/ChannelContext";
import { StyledDiv } from "./style";

const ChatBoxTitle = (): ReactElement => {
  const { channel } = useChannel();
  return <StyledDiv>{channel} Channel</StyledDiv>;
};

export default ChatBoxTitle;
