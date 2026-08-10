import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import flower1 from "../assets/flower-1.png";
import flower2 from "../assets/flower-2.png";
import flower3 from "../assets/flower-3.jpg";

import { addToCart } from "../redux/cartSlice";

import {
  addToWishlist,
  removeFromWishlist,
} from "../redux/wishlistSlice";

function Product({ search }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get wishlist items from Redux
  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  // Get cart items from Redux
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const products = [
    {
      id: 1,
      name: "Purple Orchid Bouquet",
      image: flower1,
      price: "₹699",
    },
    {
      id: 2,
      name: "Rose Bouquet",
      image: flower2,
      price: "₹599",
    },
    {
      id: 3,
      name: "Mixed Flower Basket",
      image: flower3,
      price: "₹899",
    },
  ];

  // Search products
  const filteredProducts =
    !search || search.trim() === ""
      ? products
      : products.filter((item) =>
          item.name
            .toLowerCase()
            .includes(search.toLowerCase())
        );

  // Add to Cart
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  // Wishlist
  const handleWishlist = (item) => {
    const exists = wishlistItems.some(
      (wishlistItem) => wishlistItem.id === item.id
    );

    if (exists) {
      dispatch(removeFromWishlist(item.id));
    } else {
      dispatch(addToWishlist(item));
    }
  };

  // Buy Now
  const handleBuyNow = (item) => {
    dispatch(addToCart(item));
    navigate("/cart");
  };

  return (
    <Row>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((item) => {
          const isWishlist = wishlistItems.some(
            (wishlistItem) => wishlistItem.id === item.id
          );

          const cartItem = cartItems.find(
            (cartItem) => cartItem.id === item.id
          );

          return (
            <Col
              md={4}
              className="mb-4"
              key={item.id}
            >
              <Card
                className="shadow border-0 h-100"
                style={{
                  borderRadius: "15px",
                }}
              >
                {/* Product Image */}
              <Card.Img
               variant="top"
                src={item.image}
               alt={item.name}
                style={{
                  height: "300px",
                 width: "100%",
                    objectFit: "contain",
                    backgroundColor: "#f8f8f8",
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                   }}
                   />

                <Card.Body className="text-center">

                  {/* Product Name */}
                  <Card.Title>
                    {item.name}
                  </Card.Title>

                  {/* Price */}
                  <h5 className="text-success mb-3">
                    {item.price}
                  </h5>

                  {/* Wishlist */}
                  <Button
                    variant={
                      isWishlist
                        ? "danger"
                        : "outline-danger"
                    }
                    className="me-2"
                    onClick={() =>
                      handleWishlist(item)
                    }
                  >
                    <i
                      className={
                        isWishlist
                          ? "bi bi-heart-fill"
                          : "bi bi-heart"
                      }
                    ></i>
                  </Button>

                  {/* Add To Cart */}
                  <Button
                    variant={
                      cartItem
                        ? "success"
                        : "outline-dark"
                    }
                    className="me-2"
                    onClick={() =>
                      handleAddToCart(item)
                    }
                  >
                    <i className="bi bi-cart-plus"></i>{" "}
                    {cartItem
                      ? `Added (${cartItem.quantity})`
                      : "Add to Cart"}
                  </Button>

                  {/* Buy Now */}
                  <Button
                    variant="dark"
                    onClick={() =>
                      handleBuyNow(item)
                    }
                  >
                    <i className="bi bi-lightning-fill"></i>{" "}
                    Buy Now
                  </Button>

                </Card.Body>
              </Card>
            </Col>
          );
        })
      ) : (
        <Col>
          <h4 className="text-center text-danger">
            No products found
          </h4>
        </Col>
      )}
    </Row>
  );
}

export default Product;