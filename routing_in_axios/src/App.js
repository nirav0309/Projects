// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import { Switch, useMediaQuery } from "@mui/material";
// import { useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// // import { Homepage } from "./routing/home";
// // import {  AddDataRouting } from "./routing/adddata";
// import { JsonServerComponentAxios } from "./axios/JsonServer";

// function App() {
//   const myDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
//   const [toggleDarkMode, setToggleDarkMode] = useState(myDarkMode);

//   const toggleDarkTheme = () => {
//     setToggleDarkMode(!toggleDarkMode);
//   };

//   const darkTheme = createTheme({
//     palette: {
//       mode: toggleDarkMode ? "dark" : "light",
//       primary: {
//         main: "#90caf9",
//       },
//       secondary: {
//         main: "#131052",
//       },
//     },
//   });

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <CssBaseline />
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
//       </div>
//       <BrowserRouter>
//         <Routes>
//           {/* <Route path="/" element={<Homepage />} /> */}
//           {/* <Route path="/jsonservercomponentaxios" element={ <JsonServerComponentAxios/>} /> */}
//           <Route path="/" element={<JsonServerComponentAxios/> } />
//           {/* <Route path="/adddata" element={<AddDataRouting/>} /> */}
//         </Routes>
//       </BrowserRouter>
//     </ThemeProvider>
//   );
// }

// export default App;

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { HomePage } from "./component/home";
// import { ContactPage } from "./component/contact";
// import { Header } from "./component/header";
// import { lazy, Suspense } from "react";

// const AboutPage = lazy(() => import("./component/about"));
// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Header />
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/" exact element={<HomePage />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/contact" element={<ContactPage />} />
//           </Routes>
//         </Suspense>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

//suspense and lazy example
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./component/home";
import { ContactPage } from "./component/contact";
import { Header } from "./component/header";
import React, {  Suspense } from "react";

const AboutPage = React.lazy(() => import("./component/about"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
