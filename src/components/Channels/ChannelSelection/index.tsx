import React, { memo, ReactElement } from "react";
import Channels from "../Channels";

const ChannelSelection = (): ReactElement => {
  return (
    <div className="channel-selection">
      <p style={{}}>2. Choose your Channel</p>
      <Channels />
    </div>
  );
};

export default memo(ChannelSelection);
