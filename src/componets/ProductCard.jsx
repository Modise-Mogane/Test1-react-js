import React from "react";

function ProductCard({ id, image, title, price, onClick }) {
    
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        margin: "16px",
        width: "220px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        cursor: "pointer",
        textAlign: "center",
      }}
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "120px",
          height: "120px",
          objectFit: "contain",
          marginBottom: "12px",
        }}
      />
      <h3 style={{ fontSize: "1rem", minHeight: "48px" }}>{title}</h3>
      <p style={{ fontWeight: "bold", color: "#2d7" }}>ZAR {price}</p>
    </div>
  );
}

export default ProductCard;
