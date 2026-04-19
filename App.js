import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProgramTracking from "./pages/ProgramTracking";
import Production from "./pages/Production";
import Quality from "./pages/Quality";
import SupplyChain from "./pages/SupplyChain";
import Documents from "./pages/Documents";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // keep true for demo
  const { themeStyles } = useContext(ThemeContext);

  // If login page needed
  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <Router>
      <Sidebar />
      <Navbar />

      {/* MAIN CONTENT AREA WITH THEME */}
      <div
        style={{
          marginLeft: "250px",
          marginTop: "60px",
          padding: "20px",
          background: themeStyles.background,
          color: themeStyles.text,
          minHeight: "100vh",
          transition:"all 0.3s ease"
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/program" element={<ProgramTracking />} />
          <Route path="/production" element={<Production />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/supply" element={<SupplyChain />} />
          <Route path="/documents" element={<Documents />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;