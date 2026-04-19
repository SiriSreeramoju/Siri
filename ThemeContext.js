import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const themeStyles = {
    background: darkMode ? "#0f172a" : "#f1f5f9",
    card: darkMode ? "#1e293b" : "#ffffff",
    text: darkMode ? "#ffffff" : "#000000",
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};