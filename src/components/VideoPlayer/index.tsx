import React from 'react';
import ReactPlayer from 'react-player';

import {StyledCard} from './VideoPlayer.styles';

type VideoPlayerProps = {
  url: string;
  caption: string;
};

const VideoPlayer = (props: VideoPlayerProps): JSX.Element => {
  const {url, caption} = props;

  return (
    <StyledCard
      title={caption}
      type="inner"
      bodyStyle={{display: 'flex', justifyContent: 'center'}}
    >
      <ReactPlayer url={url} />
    </StyledCard>
  );
};

export default VideoPlayer;
