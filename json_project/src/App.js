// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import { Switch, useMediaQuery } from "@mui/material";
// import "./App.css";
// import AxiosExample from "./axios/allmethods";
// import { useState } from "react";
// import { JsonServerComponentAxios } from "./axios/JsonServer";
// import { JsonServerComponent } from "./fetch/JsonServer";

// function App() {
//   const myDarkMode = useMediaQuery('(prefers-color-scheme dark')
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
//     <div className="App">
//       <ThemeProvider theme={darkTheme}>
//         <CssBaseline />
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Switch
//             checked={toggleDarkMode}
//             onChange={toggleDarkTheme}
//             className="float-right"
//           />
//         </div>

//         {/* <h2 style={{ textAlign: "center", marginTop: "20px" }}>
//           Example of JSON Data using Fetch
//         </h2> */}
//         {/* <JsonServerComponent /> */}

//         <h2 style={{ textAlign: "center", marginTop: "20px" }}>
//           Example of JSON Data using Axios
//         </h2>
//         <JsonServerComponentAxios />

//         <h2 style={{ textAlign: "center", marginTop: "20px" }}>
//           Axios All Methods Example
//         </h2>
//         <AxiosExample />
//       </ThemeProvider>
//     </div>
//   );
// }

// export default App;




import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Switch, useMediaQuery } from "@mui/material";
import "./App.css";
import AxiosExample from "./axios/allmethods";
import { useState } from "react";
import { JsonServerComponentAxios } from "./axios/JsonServer";
import { JsonServerComponent } from "./fetch/JsonServer";

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
        // main: "#131052",
      },
      secondary: {
        main: "#131052",
        // main: "#90caf9",
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Switch
            checked={toggleDarkMode}
            onChange={toggleDarkTheme}
          />
        </div>

        <h2 style={{ textAlign: "center", marginTop: "20px" }}>
          Example of JSON Data using Axios
        </h2>
        <JsonServerComponentAxios />

        <h2 style={{ textAlign: "center", marginTop: "20px" }}>
          Axios All Methods Example
        </h2>
        <AxiosExample />
      </ThemeProvider>
    </div>
  );
}

export default App;
