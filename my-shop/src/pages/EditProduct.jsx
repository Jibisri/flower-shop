import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [occasion, setOccasion] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        const product = response.data.find(
          (item) => item._id === id
        );

        if (product) {
          setName(product.name);
          setPrice(product.price);
          setCategory(product.category);
          setOccasion(product.occasion || "");
          setStock(product.stock);
          setImage(product.image);
        }
      })
      .catch((error) => {
        console.error("Get product error:", error);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:5000/api/products/${id}`,
        {
          name,
          price: Number(price),
          category,
          occasion,
          stock: Number(stock),
          image,
        }
      );

      alert("Product updated successfully! 🌸");

      navigate("/admin-products");
    } catch (error) {
      console.error("Update product error:", error);
      alert("Failed to update product");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Edit Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          required
        />

        <input
          type="number"
          className="form-control mb-3"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          min="1"
          required
        />

        <input
          type="text"
          className="form-control mb-3"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          required
        />

        <select
          className="form-select mb-3"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
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
          className="form-control mb-3"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Stock"
          min="1"
          required
        />

        <input
          type="text"
          className="form-control mb-3"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image"
          required
        />

        <button type="submit" className="btn btn-success">
          Update Product
        </button>
      </form>
    </div>
  );
}

export default EditProduct;