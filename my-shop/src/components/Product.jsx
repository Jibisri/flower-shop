
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addToCart } from "../redux/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../redux/wishlistSlice";

import flower1 from "../assets/flower-1.png";
import flower3 from "../assets/flower-3.jpg";

import red2 from "../assets/red-2.webp";

import yellow2 from "../assets/yellow-2.webp";
import yellow1 from "../assets/yellow-1.webp";

import white1 from "../assets/fresh-white.webp";
import redrose from "../assets/fresh-red.jpg";
import pink1 from "../assets/fresh-pink.jpg";

import orchid1 from "../assets/orchid-blue.jpg";
import orchid2 from "../assets/mix-orchid.jpg";
import orchid3 from "../assets/orchid-home.jpg";

import pinkBouquet from "../assets/pink-boq.jpg";

import sev2 from "../assets/sev-2.webp";
import sev1 from "../assets/sev-white.webp";

import looseflower from "../assets/loose flower.jpg";
import rosepetal from "../assets/petal-1.webp";
import Poojapetal from "../assets/petal-2.jpg";

import garland2 from "../assets/garland-2.webp";
import garland from "../assets/garlands.webp";
import garland1 from "../assets/garlands-1.jpg";
import orchidgarland from "../assets/orchid garland.png";

import pooja1 from "../assets/pooja-1.jpg";
import pooja2 from "../assets/pooja-2.jpg";


 const imageMap = {
  "Orchid Bouquet": orchid3,
  "Rose Bouquet": flower3,
  "Purple Sevanthi": flower1,
  "Red Roses Bouquet": red2,

  "Yellow Roses Bouquet": yellow2,
  "Yellow Bouquet": yellow1,

  "White Roses": white1,
  "Pink Roses": pink1,

  "Red Roses": redrose,

  "Blue Orchid": orchid1,
  "Mixed Orchids": orchid2,

  "Loose Flower": looseflower,
  "Rose Petals": rosepetal,
  "Loose Flowers": Poojapetal,

  "Pooja Garlands": garland,
  "Garland Pink & White": garland1,
  "Rose Garland": garland2,
  "Orchid Garland": orchidgarland,

  "Marigold": pooja1,
  "Pooja Flowers": pooja2,

  "Pink Bouquet": pinkBouquet,

  "Sevanthi": sev2,
  "White Sevanthi": sev1,
};

function Product({ search, category, occasion, product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const savedUser = localStorage.getItem("user");
  const user = savedUser ? JSON.parse(savedUser) : null;

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        const backendProducts = response.data.map(
          (product) => ({
            ...product,
            id: product._id,
            image:
              imageMap[product.name.trim()] || flower1,
            price: `₹${product.price}`,
          })
        );

        setProducts(backendProducts);
      })
      .catch((error) => {
        console.error("API ERROR:", error);
      });
  }, []);

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

      setProducts((prevProducts) =>
        prevProducts.filter(
          (product) => product.id !== id
        )
      );

      alert("Product deleted successfully! 🌸");
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete product");
    }
  };

  const handleWishlist = (item) => {
    const exists = wishlistItems.some(
      (wishlistItem) =>
        wishlistItem.id === item.id
    );

    if (exists) {
      dispatch(removeFromWishlist(item.id));
    } else {
      dispatch(addToWishlist(item));
    }
  };

  const handleBuyNow = (item) => {
    if (item.stock <= 0) {
      return;
    }

    dispatch(addToCart(item));
    navigate("/cart");
  };

console.log("Products from API:", products);
console.log("Filters:", {
  search,
  category,
  occasion,
  product,
});

  const filteredProducts = products.filter((item) => {
    const matchesSearch =
      !search ||
      item.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      !category ||
      category === "All" ||
      item.category === category;

    const matchesOccasion =
      !occasion ||
      item.occasion === occasion;

    const matchesProduct =
      !product ||
      item.name === product;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesOccasion &&
      matchesProduct
    );
  });

  return (
    <div>
      <h2
        className="mt-5"
        style={{
          color: "#2b5605c7",
          fontFamily: "Georgia",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        <i className="bi bi-arrow-right"></i>{" "}
        Products
      </h2>

      <p
        className="text-center mb-5"
        style={{
          color: "#666",
          fontSize: "clamp(14px, 2vw, 17px)",
          fontStyle: "italic",
        }}
      >
        <i className="bi bi-stars"></i>{" "}
        Beautiful blooms, thoughtfully chosen for every
        special moment.{" "}
        <i className="bi bi-stars"></i>
      </p>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-5">
          <i
            className="bi bi-flower1"
            style={{
              fontSize: "50px",
              color: "#6b077d",
            }}
          ></i>

          <h4 className="mt-3">
            No products found
          </h4>

          <p className="text-muted">
            Try another search, category or occasion.
          </p>
        </div>
      ) : (
        <Row className="g-4">
          {filteredProducts.map((item) => {
            const isWishlisted = wishlistItems.some(
              (wishlistItem) =>
                wishlistItem.id === item.id
            );

            const cartItem = cartItems.find(
              (cart) => cart.id === item.id
            );

            return (
              <Col
                xs={6}
                sm={6}
                md={4}
                lg={3}
                key={item.id}
              >
                <Card
                  className="h-100 shadow-sm"
                  style={{
                    borderRadius: "15px",
                    overflow: "hidden",
                    border: "1px solid #b8b8b8",
                  }}
                >
                  <div
                    style={{
                      height: "230px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#fafafa",
                      position: "relative",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        padding: "10px",
                      }}
                    />

                    <Button
                      variant="light"
                      onClick={() =>
                        handleWishlist(item)
                      }
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: "none",
                        boxShadow:
                          "0 2px 8px rgba(0,0,0,0.15)",
                      }}
                    >
                      <i
                        className={
                          isWishlisted
                            ? "bi bi-heart-fill"
                            : "bi bi-heart"
                        }
                        style={{
                          color: isWishlisted
                            ? "red"
                            : "#555",
                          fontSize: "18px",
                        }}
                      ></i>
                    </Button>
                  </div>

                  <Card.Body className="d-flex flex-column">
                    <div>
                      <Card.Title
                        className="mb-1"
                        style={{
                          fontSize: "20px",
                          fontWeight: "600",
                        }}
                      >
                        {item.name}
                      </Card.Title>

                      <div
                        style={{
                          color: "#6b077d",
                          fontWeight: "bold",
                          fontSize: "18px",
                          textAlign: "left",
                        }}
                      >
                        {item.price}
                      </div>
                    </div>

                    <small
                      className="mt-2"
                      style={{
                        color:
                          item.stock > 0
                            ? "green"
                            : "red",
                        fontWeight: "500",
                      }}
                    >
                      {item.stock > 0
                        ? `In Stock (${item.stock})`
                        : "Out of Stock"}
                    </small>

                    <div className="mt-auto pt-3">
                      <div className="d-flex gap-2">
                        <Button
                          variant="outline-dark"
                          className="flex-grow-1"
                          disabled={item.stock <= 0}
                          onClick={() =>
                            dispatch(
                              addToCart(item)
                            )
                          }
                        >
                          <i className="bi bi-cart-plus"></i>{" "}
                          {cartItem
                            ? "Add More"
                            : "Add Cart"}
                        </Button>

                        <Button
                          style={{
                            backgroundColor: "#6b077d",
                            border: "none",
                          }}
                          disabled={item.stock <= 0}
                          onClick={() =>
                            handleBuyNow(item)
                          }
                        >
                          Buy Now
                        </Button>
                      </div>

                      {user?.role === "admin" && (
                        <Button
                          variant="outline-danger"
                          className="w-100 mt-2"
                          onClick={() =>
                            handleDelete(item.id)
                          }
                        >
                          <i className="bi bi-trash"></i>{" "}
                          Delete
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );

}
export default Product;
