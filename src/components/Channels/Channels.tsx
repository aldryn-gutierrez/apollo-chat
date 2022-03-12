import React, {ReactElement} from 'react';
import Channel from './Channel';

const Channels = () : ReactElement => {
  return (
    <div>
      <Channel name={"General Channel"} />
      <Channel name={"Technology Channel"} />
      <Channel name={"LGTM Channel"} />
    </div>
  )
}

export default Channels;