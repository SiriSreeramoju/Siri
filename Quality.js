import React from "react";

const productionStats = [
  { title: "Total Output", value: "12,450 Units" },
  { title: "Work In Progress (WIP)", value: "1,230 Units" },
  { title: "Defect Rate", value: "2.3%" },
  { title: "Machine Utilization", value: "89%" },
];

const plantData = [
  {
    plant: "Hyderabad Plant",
    line: "Line A",
    status: "Running",
    output: 3200,
    defects: 45,
  },
  {
    plant: "Bangalore Plant",
    line: "Line B",
    status: "Delayed",
    output: 2800,
    defects: 60,
  },
  {
    plant: "Chennai Plant",
    line: "Line C",
    status: "Running",
    output: 3500,
    defects: 30,
  },
];

const Production = () => {
  return (
    <div>
      <h1>Production Visibility Dashboard</h1>
      <p>Real-time Production, WIP, Defect & Capacity Monitoring</p>

      {/* KPI CARDS */}
      <div style={cardGrid}>
        {productionStats.map((stat, index) => (
          <div key={index} style={card}>
            <h3>{stat.title}</h3>
            <h2>{stat.value}</h2>
          </div>
        ))}
      </div>

      {/* PLANT TABLE */}
      <div style={tableContainer}>
        <h2>Multi-Site Production Status</h2>
        <table style={table}>
          <thead>
            <tr style={headerRow}>
              <th>Plant</th>
              <th>Production Line</th>
              <th>Status</th>
              <th>Output (Units)</th>
              <th>Defects</th>
            </tr>
          </thead>
          <tbody>
            {plantData.map((item, index) => (
              <tr key={index} style={row}>
                <td>{item.plant}</td>
                <td>{item.line}</td>
                <td
                  style={{
                    color: item.status === "Running" ? "green" : "orange",
                    fontWeight: "bold",
                  }}
                >
                  {item.status}
                </td>
                <td>{item.output}</td>
                <td style={{ color: "red" }}>{item.defects}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CAPACITY SECTION */}
      <div style={capacityBox}>
        <h2>Capacity & Throughput Overview</h2>
        <p>Current Capacity Utilization: <strong>89%</strong></p>
        <p>Bottleneck Line: <strong>Line B (Bangalore)</strong></p>
        <p>Recommended Action: Increase shift allocation</p>
      </div>
    </div>
  );
};

const cardGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "20px",
  marginTop: "20px",
};

const card = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

const tableContainer = {
  marginTop: "30px",
  background: "#ffffff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "10px",
};

const headerRow = {
  backgroundColor: "#0f172a",
  color: "white",
  textAlign: "left",
};

const row = {
  borderBottom: "1px solid #ddd",
};

const capacityBox = {
  marginTop: "30px",
  background: "#ffffff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

export default Production;