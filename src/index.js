import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <App />
      </SkeletonTheme>
    </BrowserRouter>
  </React.StrictMode>
);
