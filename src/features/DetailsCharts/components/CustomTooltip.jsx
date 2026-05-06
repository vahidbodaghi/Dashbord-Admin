import React from "react";

export default function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length > 0) {
    const item = payload[0];

    return (
      <div
        style={{
          background: "white",
          padding: "10px 14px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
          direction: "rtl",
          textAlign: "right",
        }}
      >
    
        {label && (
          <p style={{ margin: 0, fontWeight: "bold", color: "#16a34a" }}>
            {label}
          </p>
        )}

     
        <p style={{ margin: "4px 0 0 0", color: "#374151" }}>
          <span>{item.name || "مقدار"}:</span>{" "}
          <strong>{item.value?.toLocaleString("fa-IR")}</strong>
        </p>
      </div>
    );
  }

  return null; 
}

