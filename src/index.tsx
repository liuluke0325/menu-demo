import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.scss";
import { TonicProvider } from "@tonic-ui/react";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <TonicProvider
      // colorMode={{
      //   defaultValue: 'dark', // One of: 'dark', 'light'
      // }}
      // colorStyle={{
      //   defaultValue: colorStyle, // Custom color style
      // }}
      useCSSBaseline={true} // If `true`, apply CSS reset and base styles
    >
      <App />
    </TonicProvider>
  </React.StrictMode>
);