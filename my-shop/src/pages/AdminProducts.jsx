import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Get all products
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/products"
      );

      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete product
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(
        `http://localhost:5000/api/products/${id}`
      );

      alert("Product deleted successfully! 🌸");

      fetchProducts();
    } catch (error) {
      console.error("DELETE PRODUCT ERROR:", error);

      alert("Failed to delete product.");
    }
  };

  return (
    <div className="container mt-5">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2>Admin Product Management</h2>

        <button
          className="btn btn-success"
          onClick={() => navigate("/add-product")}
        >
          + Add Product
        </button>

      </div>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        products.map((product) => (
          <div
            key={product._id}
            className="card mb-3 p-3 shadow-sm"
          >
            <h5>{product.name}</h5>

            <p className="mb-1">
              Price: ₹{product.price}
            </p>

            <p className="mb-1">
              Category: {product.category}
            </p>

            <p className="mb-3">
              Stock: {product.stock}
            </p>

            <div>

              {/* Edit */}
              <button
                className="btn btn-warning me-2"
                onClick={() =>
                  navigate(`/edit-product/${product._id}`)
                }
              >
                Edit
              </button>

              {/* Delete */}
              <button
                className="btn btn-danger"
                onClick={() =>
                  handleDelete(product._id)
                }
              >
                Delete
              </button>

            </div>

          </div>
        ))
      )}

    </div>
  );
}

export default AdminProducts;