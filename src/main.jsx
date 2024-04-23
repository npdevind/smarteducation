import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/App.scss";
import { RouterProvider } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
