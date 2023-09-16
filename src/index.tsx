import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.scss";
import { TonicProvider } from "@tonic-ui/react";
const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <TonicProvider
      useCSSBaseline={true}
    >
      <App />
    </TonicProvider>
  </React.StrictMode>
);