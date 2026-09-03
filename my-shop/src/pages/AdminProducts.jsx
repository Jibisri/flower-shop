import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Admin Product Management</h2>

      {products.map((product) => (
        <div key={product._id} className="card mb-3 p-3">
          <h5>{product.name}</h5>

          <p>Price: ₹{product.price}</p>
          <p>Category: {product.category}</p>
          <p>Stock: {product.stock}</p>

          <div>
            <button className="btn btn-warning me-2">
              Edit
            </button>

            <button className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminProducts;