import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetGoing = () => {
    navigate("/intro");
  };

  return (
    <div>
      <Header />
      <button onClick={handleGetGoing}>Get Going</button>
    </div>
  );
};

export default WelcomePage;
