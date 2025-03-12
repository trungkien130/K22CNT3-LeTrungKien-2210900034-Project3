import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./LTK_App.tsx";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
