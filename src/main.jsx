import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import Navbar from "./navbar";

//wrap app in browser router
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  
      <App />
  </React.StrictMode>
);
