import React from 'react';

function VideoPlayer(props) {
    const { ytId, title } = props;
    const videoSrc = `https://www.youtube-nocookie.com/embed/${ytId}?vq=hd1080&autoplay=1&loop=1&modestbranding=1&rel=0&iv_load_policy=3&controls=0&disablekb=1&playlist=${ytId}&mute=1`;

    return (
        <iframe
          src={videoSrc}
          title={title}
          allow="autoplay; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
          loading='lazy'
        ></iframe>
      );
};

export default VideoPlayer;
