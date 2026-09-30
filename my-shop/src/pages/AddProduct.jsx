import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [occasion, setOccasion] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/products",
        {
          name,
          price: Number(price),
          category,
          occasion,
          stock: Number(stock),
          image,
        }
      );

      alert("Product added successfully! 🌸");

      setName("");
      setPrice("");
      setCategory("");
      setOccasion("");
      setStock("");
      setImage("");

      navigate("/admin-products");
    } catch (error) {
      console.error("Add product error:", error);
      alert("Failed to add product");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control mb-3"
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="form-control mb-3"
          min="1"
          required
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="form-control mb-3"
          required
        />

        <select
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          className="form-select mb-3"
          required
        >
          <option value="">Select Occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Valentine's Day">Valentine's Day</option>
          <option value="Congratulations">Congratulations</option>
          <option value="Get Well Soon">Get Well Soon</option>
          <option value="Wedding">Wedding</option>
          <option value="Temple">Temple</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Housewarming">Housewarming</option>
          <option value="Father's Day">Father's Day</option>
          <option value="Mother's Day">Mother's Day</option>
        </select>

        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="form-control mb-3"
          min="1"
          required
        />

        <input
          type="text"
          placeholder="Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="form-control mb-3"
          required
        />

        <button type="submit" className="btn btn-success">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;