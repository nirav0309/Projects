// import React from "react";
// import Chatbot from "react-chatbot-kit";
// import "./App.css";

// import ActionProvider from "./ActionProvider";
// import MessageParser from "./MessageParser";
// import config from "./config";
// import "react-chatbot-kit/build/main.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Chatbot
//           config={config}
//           actionProvider={ActionProvider}
//           messageParser={MessageParser}
//         />
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import axios from "axios";
import { useState } from "react";
import MyComponent from "./components/xyz";

function App() {
  const [que, setQue] = useState("");
  const [ans, setAns] = useState("");

  const getItem = async () => {
    setAns("loading...");
    const response = await axios({
      method: "post",
      url:
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBvdqzMmA_jfEgxf3IorJz7wPTTIV9h47o",
      data: {
        contents: [
          {
            parts: [
              {
                text: que,
              },
            ],
          },
        ],
      },
    });

    setAns(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);

    // console.log("chat",response);
  };
  return (
    <div className="App">
      <h4>Sasta Chatbot</h4>
      <textarea
        name=""
        id=""
        value={que}
        onChange={(e) => setQue(e.target.value)}
      ></textarea>{" "}
      <br />
      <button onClick={getItem}>Click</button>
      <p>{ans}</p>
      <MyComponent/>
      <MyComponent/>
      <MyComponent/>
    </div>
  );
}

export default App;
