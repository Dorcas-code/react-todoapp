import { StrictMode } from "react";
import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter base="/react-todoapp/">
    <App />
  </HashRouter>,
);
