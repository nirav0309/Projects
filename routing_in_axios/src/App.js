import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Switch, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Homepage } from "./routing/home"; 
// import {  AddDataRouting } from "./routing/adddata";
import { JsonServerComponentAxios } from "./axios/JsonServer";

function App() {
  const myDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [toggleDarkMode, setToggleDarkMode] = useState(myDarkMode);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "dark" : "light",
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#131052",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
      </div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Homepage />} /> */}
          {/* <Route path="/jsonservercomponentaxios" element={ <JsonServerComponentAxios/>} /> */}
          <Route path="/" element={<JsonServerComponentAxios/> } />
          {/* <Route path="/adddata" element={<AddDataRouting/>} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
