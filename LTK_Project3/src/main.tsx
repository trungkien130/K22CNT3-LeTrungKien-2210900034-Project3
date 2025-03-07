import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./LTK_App.tsx";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
