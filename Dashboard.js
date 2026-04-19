import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";

const Sidebar = () => {
  const { themeStyles } = useContext(ThemeContext);

  return (
    <div
      style={{
        width: "250px",   // 🔥 KEEP SAME EVERYWHERE
        height: "100vh",
        background: themeStyles.card,
        color: themeStyles.text,
        padding: "20px",
        position: "fixed",
        top: 0,
        left: 0,
        borderRight: "1px solid #e5e7eb", // clean thin line
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>FactoryIQ Portal</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/" style={link}>Dashboard</Link></li>
        <li><Link to="/program" style={link}>Program Tracking</Link></li>
        <li><Link to="/production" style={link}>Production</Link></li>
        <li><Link to="/quality" style={link}>Quality</Link></li>
        <li><Link to="/supply" style={link}>Supply Chain</Link></li>
        <li><Link to="/documents" style={link}>Documents</Link></li>
      </ul>
    </div>
  );
};

const link = {
  display: "block",
  padding: "10px 0",
  textDecoration: "none",
  color: "inherit",
  fontWeight: "500",
};

export default Sidebar;