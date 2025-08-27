import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail() {
    
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "24px",
        border: "1px solid #eee",
        borderRadius: "8px",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "#0077cc" }}>
        &larr; Back to Products
      </Link>
      <div style={{ display: "flex", gap: "32px", marginTop: "24px" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "200px", objectFit: "contain" }}
        />
        <div>
          <h2>{product.title}</h2>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Description:</strong> {product.description}
          </p>
          <p>
            <strong>Price:</strong> ZAR {product.price}
          </p>
          <p>
            <strong>Rating:</strong> {product.rating?.rate} (
            {product.rating?.count} reviews)
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
