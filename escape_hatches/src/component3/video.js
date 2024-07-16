import { useState, useRef, useEffect } from "react";
import video1 from "../assets/video1.mp4";

const MainComponent = () => {
  const [playing, setPlaying] = useState(false);
  return (
    <>
      <button onClick={() => setPlaying(!playing)}>
        {playing ? "Pause" : "Play"}
      </button>
      {/* <VideoPlayer isPlaying={playing} src={"https://videos.pexels.com/video-files/5669598/5669598-uhd_3840_2160_30fps.mp4"} /> */}
      <VideoPlayer isPlaying={playing} src={video1} />
    </>
  );
};

const VideoPlayer = ({ src, isPlaying }) => {
  const ref = useRef(null);
  const [text, setText] = useState("");

  useEffect(() => {
    if (isPlaying) {
      console.log("play");
      ref.current.play(); 
    } else {
      console.log("pause");
      ref.current.pause(); 
    }
  }, [isPlaying]); //if we don't provide dependency array [isPlaying], writing in input field will effect the console. and dependency tells react to skip the re-running effect 

  // if(isPlaying){
  //     ref.current.play(); //calling these while rendering isn't allow, reason is this code try to do something the DOM node during rendering
  // }
  // else{
  //     ref.current.pause(); //also this crashes, if we did not use useEffect
  // }

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} /> <br />
      <video
        src={src}
        ref={ref}
        loop
        playsInline
        style={{ width: "500px", height: "300px" }}
      ></video>
    </div>
  );
};

export { MainComponent };
