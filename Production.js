import React from "react";

const documents = [
  {
    name: "Quality Manual.pdf",
    department: "Quality",
    version: "v2.1",
    status: "Approved",
  },
  {
    name: "Production SOP.docx",
    department: "Production",
    version: "v1.4",
    status: "Under Review",
  },
  {
    name: "Supplier Guidelines.xlsx",
    department: "Supply Chain",
    version: "v3.0",
    status: "Approved",
  },
];

const knowledgeBase = [
  "How to handle NCR cases",
  "Production line troubleshooting guide",
  "Audit preparation checklist",
  "Machine maintenance procedures",
];

const Documents = () => {
  return (
    <div>
      <h1>Documents, Knowledge & Collaboration</h1>
      <p>Centralized Document Repository & Team Knowledge Base</p>

      {/* Upload Section */}
      <div style={uploadBox}>
        <h2>Upload New Document</h2>
        <input type="file" />
        <button style={uploadButton}>Upload</button>
      </div>

      {/* Document Repository Table */}
      <div style={tableContainer}>
        <h2>Document Repository</h2>
        <table style={table}>
          <thead>
            <tr style={headerRow}>
              <th>Document Name</th>
              <th>Department</th>
              <th>Version</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, index) => (
              <tr key={index} style={row}>
                <td>{doc.name}</td>
                <td>{doc.department}</td>
                <td>{doc.version}</td>
                <td
                  style={{
                    color:
                      doc.status === "Approved" ? "green" : "orange",
                    fontWeight: "bold",
                  }}
                >
                  {doc.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Knowledge Base Section */}
      <div style={knowledgeBox}>
        <h2>Knowledge Base</h2>
        <ul>
          {knowledgeBase.map((item, index) => (
            <li key={index} style={listItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Collaboration Panel */}
      <div style={collaborationBox}>
        <h2>Team Collaboration</h2>
        <p>Last Updated By: Admin</p>
        <p>Recent Activity: Quality Manual updated (v2.1)</p>
        <p>Shared With: Production, Quality, Supply Chain Teams</p>
      </div>
    </div>
  );
};

const uploadBox = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  marginTop: "20px",
};

const uploadButton = {
  marginLeft: "10px",
  padding: "8px 16px",
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
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

const knowledgeBox = {
  marginTop: "30px",
  background: "#ffffff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

const listItem = {
  marginBottom: "8px",
};

const collaborationBox = {
  marginTop: "30px",
  background: "#ffffff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

export default Documents;