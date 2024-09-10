import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";

const VideoPage: React.FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/question/1");
  };

  return (
    <div>
      <Header />
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default VideoPage;
