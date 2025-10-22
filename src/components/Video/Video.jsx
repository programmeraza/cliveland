// Video.jsx
import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { Play } from "lucide-react";
import "./Video.scss";

const Video = ({ url = "./video.mp4", poster = "./video.png" }) => {
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef(null);

  const togglePlay = () => setPlaying(!playing);

  return (
      <div className="container">
    <div className="video-wrapper">
        <ReactPlayer
          ref={playerRef}
          src={url}
          controls={playing}
          width="100%"
          height="100%"
          light={!playing ? poster : false}
          onClick={togglePlay}
        />
      </div>
    </div>
  );
};

export default Video;
