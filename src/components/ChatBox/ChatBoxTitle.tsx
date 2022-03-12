import styled from "@emotion/styled";
import React, { ReactElement } from "react";
import { useChannel } from "../../contexts/ChannelContext";

const StyledDiv = styled.div`
  // height: 65px;
  width: inherit;
  padding: 0 15px;
  min-height: 64px;
  line-height: 64px;
  border-bottom: 1px solid #e6ecf3;
  -webkit-border-radius: 0 3px 0 0;
  -moz-border-radius: 0 3px 0 0;
  border-radius: 0 3px 0 0;
`;

const ChatBoxTitle = (): ReactElement => {
  const { channel } = useChannel();
  return <StyledDiv>{channel} Channel</StyledDiv>;
};

export default ChatBoxTitle;
