import React from "react";
import "./App.css";
import { HomePage } from "./component/home.js";
import { ReportPage } from "./component/report.js";
import { StudentPage } from "./component/student.js";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* <Route path="/report" element={<ReportPage />} />
          <Route path="/student" element={<StudentPage />} /> */}

          <Route path="/" Component={HomePage} />
          <Route path="/report" Component={ReportPage} />
          <Route path="/student" Component={StudentPage} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
