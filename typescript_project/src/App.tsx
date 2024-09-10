// import React from 'react';
// import './App.css';
// import { Counter } from './component/counter';

// function App() {
//   return (
//     <div className="App">
//       {/* <Counter/> */}

//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./component/welcom";
import VideoPage from "./component/video";
import QuestionPage from "./component/question";
import ResultPage from "./component/result";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/intro" element={<VideoPage />} />
        <Route path="/question/:questionId" element={<QuestionPage />} />
        <Route path="/passed" element={<ResultPage />} />
        <Route path="/failed" element={<ResultPage />} />
      </Routes>
    </Router>
  );
};

export default App;
