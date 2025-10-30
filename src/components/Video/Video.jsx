import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { Play } from "lucide-react";
import "./Video.scss";

import videoFile from "../../assets/video/video.mp4";
import posterImage from "../../assets/img/video.png";

const Video = () => {
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef(null);

  const togglePlay = () => setPlaying(!playing);

  return (
    <div className="video">
      <div className="container">
        <div className="video-wrapper" onClick={togglePlay}>
          <ReactPlayer
            ref={playerRef}
            url={videoFile}
            playing={playing}
            controls
            width="100%"
            height="100%"
            light={!playing ? posterImage : false}
          />
        </div>
      </div>
    </div>
  );
};

export default Video;

