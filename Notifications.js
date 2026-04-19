import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import Notifications from "./Notifications";

const Navbar = () => {
  const { darkMode, toggleTheme, themeStyles } = useContext(ThemeContext);

  return (
    <div
      style={{
        height: "60px",
        background: themeStyles.card,
        color: themeStyles.text,
        marginLeft: "250px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        position: "fixed",
        top: 0,
        right: 0,
        left: "250px",
        zIndex: 999,
      }}
    >
      <h3>Manufacturing Excellence Portal</h3>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        {/* DARK MODE BUTTON */}
        <button
          onClick={toggleTheme}
          style={{
            padding: "6px 12px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            background: darkMode ? "#facc15" : "#0f172a",
            color: darkMode ? "#000" : "#fff",
            fontWeight: "bold",
          }}
        >
          {darkMode ? "Light ☀️" : "Dark 🌙"}
        </button>

        <Notifications />
        <span style={{ fontWeight: "bold" }}>Admin</span>
      </div>
    </div>
  );
};

export default Navbar;