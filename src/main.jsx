import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { registerSW } from "virtual:pwa-register";
import { Analytics } from "@vercel/analytics/react";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./state/auth-context";
import { StudyProvider } from "./state/study-context";

registerSW({ immediate: true });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <StudyProvider>
          <App />
          <Analytics />
        </StudyProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
