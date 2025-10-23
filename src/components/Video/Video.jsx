import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { Play } from "lucide-react";
import "./Video.scss";

// ✅ Импорт из assets
import videoFile from "../../assets/video/video.mp4";
import posterImage from "../../assets/img/video.png";

const Video = () => {
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef(null);

  const togglePlay = () => setPlaying(!playing);

  return (
    <div className="container">
      <div className="video-wrapper" onClick={togglePlay}>
        <ReactPlayer
          ref={playerRef}
          url={videoFile}        // ✅ теперь ссылка на импортированный файл
          playing={playing}
          controls
          width="100%"
          height="100%"
          light={!playing ? posterImage : false} // ✅ постер из assets
        />
      </div>
    </div>
  );
};

export default Video;

