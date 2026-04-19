import React, { useContext } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ThemeContext } from "../ThemeContext";

const productionData = [
  { month: "Jan", output: 400 },
  { month: "Feb", output: 600 },
  { month: "Mar", output: 800 },
  { month: "Apr", output: 750 },
  { month: "May", output: 900 },
];

const qualityData = [
  { month: "Jan", defects: 30 },
  { month: "Feb", defects: 25 },
  { month: "Mar", defects: 20 },
  { month: "Apr", defects: 18 },
  { month: "May", defects: 12 },
];

const Dashboard = () => {
  const { themeStyles } = useContext(ThemeContext);

  const cardGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    marginTop: "20px",
  };

  const card = {
    background: themeStyles.card,
    color: themeStyles.text,
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  const chartContainer = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginTop: "30px",
  };

  const chartBox = {
    background: themeStyles.card,
    color: themeStyles.text,
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  };

  const headingStyle = {
    marginBottom: "5px",
  };

  const subText = {
    opacity: 0.7,
    marginBottom: "10px",
  };

  return (
    <div>
      <h1 style={headingStyle}>Analytics & Reporting Dashboard</h1>
      <p style={subText}>
        Executive KPIs, Production Trends & Quality Insights
      </p>

      {/* KPI Cards */}
      <div style={cardGrid}>
        <div style={card}>
          <h3>On-Time Delivery</h3>
          <h2>95%</h2>
        </div>

        <div style={card}>
          <h3>Quality Score</h3>
          <h2>92%</h2>
        </div>

        <div style={card}>
          <h3>Capacity Utilization</h3>
          <h2>88%</h2>
        </div>

        <div style={card}>
          <h3>Active Projects</h3>
          <h2>24</h2>
        </div>
      </div>

      {/* Charts Section */}
      <div style={chartContainer}>
        {/* Production Chart */}
        <div style={chartBox}>
          <h3>Production Output Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={productionData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="output"
                stroke="#2563eb"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Quality Chart */}
        <div style={chartBox}>
          <h3>Quality Defect Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={qualityData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="defects" fill="#ef4444" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;