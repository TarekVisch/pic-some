import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { PhotosContextProvider } from "./context/photosContext";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <PhotosContextProvider>
    <Router>
      <App />
    </Router>
  </PhotosContextProvider>,
  document.getElementById("root")
);
