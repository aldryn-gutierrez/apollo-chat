import React, { ReactElement } from "react";
import { ChannelType } from "../../contexts/ChannelContext";
import Channel from "./Channel";

const Channels = (): ReactElement => {
  return (
    <div>
      <Channel name={ChannelType.General} />
      <Channel name={ChannelType.Technology} />
      <Channel name={ChannelType.LGTM} />
    </div>
  );
};

export default Channels;
