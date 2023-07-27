import React from "react";
import { ReactDOM } from "react";
import App from "./App";
import ThemeContextProvider from "./context/ThemeContext";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
