import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./component/Header";
import Image from "./component/Image";
import store from "./store/store";
import { Provider } from "react-redux";

const App = () => (
  
  
  <Provider store={store}>
    <div className="container">
      <Header />
      {/* <Image /> */}
    </div>
  </Provider>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
