import React, { useState } from "react";

const notificationsData = [
  {
    title: "Production Delay Alert",
    message: "Line B production is delayed by 2 hours",
    time: "10 mins ago",
  },
  {
    title: "Quality Issue Detected",
    message: "High defect rate in Chennai Plant",
    time: "30 mins ago",
  },
  {
    title: "Low Inventory Warning",
    message: "Sensor stock below minimum level",
    time: "1 hour ago",
  },
];

const Notifications = () => {
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      {/* Bell Icon */}
      <button style={bellButton} onClick={() => setShow(!show)}>
        🔔
      </button>

      {/* Notification Dropdown */}
      {show && (
        <div style={dropdown}>
          <h4>Notifications</h4>
          {notificationsData.map((item, index) => (
            <div key={index} style={notificationItem}>
              <strong>{item.title}</strong>
              <p style={{ margin: "5px 0" }}>{item.message}</p>
              <small style={{ color: "gray" }}>{item.time}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const bellButton = {
  fontSize: "20px",
  background: "none",
  border: "none",
  cursor: "pointer",
};

const dropdown = {
  position: "absolute",
  right: 0,
  top: "40px",
  width: "300px",
  background: "#ffffff",
  borderRadius: "10px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
  padding: "15px",
  zIndex: 1000,
};

const notificationItem = {
  borderBottom: "1px solid #eee",
  padding: "10px 0",
};

export default Notifications;