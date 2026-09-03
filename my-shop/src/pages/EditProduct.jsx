import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");

  // Get existing product
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
          setStock(product.stock);
          setImage(product.image);
        }
      })
      .catch((error) => {
        console.error(error);
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
          stock: Number(stock),
          image,
        }
      );

      alert("Product updated successfully! 🌸");

      navigate("/shop");
    } catch (error) {
      console.error(error);
      alert("Failed to update product");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Edit Product</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          className="form-control mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
        />

        <input
          type="number"
          className="form-control mb-3"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />

        <input
          type="text"
          className="form-control mb-3"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        />

        <input
          type="number"
          className="form-control mb-3"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Stock"
        />

        <input
          type="text"
          className="form-control mb-3"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image"
        />

        <button type="submit" className="btn btn-success">
          Update Product
        </button>

      </form>
    </div>
  );
}

export default EditProduct;