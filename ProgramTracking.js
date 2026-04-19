import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple demo login (no backend)
    if (email && password) {
      onLogin();
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div style={container}>
      <div style={loginBox}>
        <h2>FactoryIQ Portal Login</h2>
        <p>Manufacturing Excellence System</p>

        <form onSubmit={handleSubmit}>
          <div style={inputGroup}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={input}
            />
          </div>

          <div style={inputGroup}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={input}
            />
          </div>

          <button type="submit" style={button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f1f5f9",
};

const loginBox = {
  background: "#ffffff",
  padding: "40px",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  width: "350px",
};

const inputGroup = {
  marginBottom: "15px",
  display: "flex",
  flexDirection: "column",
};

const input = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  marginTop: "5px",
};

const button = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "10px",
};

export default Login;