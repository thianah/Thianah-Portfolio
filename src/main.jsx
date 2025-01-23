import React from "react";
import ReactDOM from "react-dom/client";
//importing router
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

//wrap app in browser router
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
