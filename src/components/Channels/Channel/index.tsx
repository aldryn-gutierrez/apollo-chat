import React, { ReactElement } from "react";
import { ChannelType, useChannel } from "../../../contexts/ChannelContext";
import { StyleDiv } from "./style";

const Channel = ({ name }: { name: ChannelType }): ReactElement => {
  const { channel, setChannel } = useChannel();
  return (
    <StyleDiv selected={channel === name} onClick={() => setChannel(name)}>
      {name} Channel
    </StyleDiv>
  );
};

export default Channel;
