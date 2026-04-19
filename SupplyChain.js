import React from "react";

const ProgramTracking = () => {
  return (
    <div>
      <h1>Program / Project Tracking</h1>
      <p>Track R&D → NPI → Production lifecycle</p>

      <table style={table}>
        <thead>
          <tr>
            <th>Program</th>
            <th>Owner</th>
            <th>Status</th>
            <th>Milestone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Smart Sensor Project</td>
            <td>Engineering Team</td>
            <td style={{ color: "green" }}>On Track</td>
            <td>Prototype Testing</td>
          </tr>
          <tr>
            <td>AI Automation</td>
            <td>AI Team</td>
            <td style={{ color: "orange" }}>At Risk</td>
            <td>Model Training</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const table = {
  width: "100%",
  marginTop: "20px",
  background: "#fff",
  borderCollapse: "collapse",
};

export default ProgramTracking;