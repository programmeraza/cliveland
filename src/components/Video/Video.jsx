import React from 'react';
import './Video.scss';

const Video = () => {
  return (
    <>
      <div className="video">
        <div className="container">
          <video
            width="100%"
            height="auto"
            controls
            poster="./video.png" 
          >
            <source src="./video.mp4" type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
        </div>
      </div>
    </>
  );
};

export default Video;
