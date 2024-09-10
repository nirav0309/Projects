import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./header";

const ResultPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleButtonClick = () => {
    if (location.pathname === "/passed") {
    } else {
      navigate("/question/1");
    }
  };

  return (
    <div>
      <Header />
      <h2>
        {location.pathname === "/passed"
          ? "Congratulations! You Passed!"
          : "You Failed!"}
      </h2>
      <button onClick={handleButtonClick}>
        {location.pathname === "/passed" ? "Continue" : "Restart Quiz"}
      </button>
    </div>
  );
};

export default ResultPage;
