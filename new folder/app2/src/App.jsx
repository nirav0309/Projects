import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import store from "app1/store";
import { Provider } from "react-redux";
import Header from "app1/Header";
import Image from "app1/Image";
import store1 from "./store/store";

const st = { ...store, ...store1 };
const App = () => (
  <div className="container">
    <div>
      {/* Name: app2 */}
      <Provider store={st}>
        {/* <Provider store={store1}> */}
        <Header />
        {/* </Provider> */}
        <Image />
      </Provider>
    </div>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
