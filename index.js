import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 👇 ADD THIS LINE HERE (TOP IMPORTS)
import { ThemeProvider } from "./ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* 👇 WRAP APP WITH THEME PROVIDER */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);