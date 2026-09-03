import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addToCart } from "../redux/cartSlice";

// Product images
import flower1 from "../assets/flower-1.png";
import flower2 from "../assets/flower-2.png";
import flower3 from "../assets/flower-3.jpg";
import pinkBouquet from "../assets/pink-boq.jpg";
import orchid1 from "../assets/orchid-blue.jpg";

function BestSeller() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = [
    {
      name: "Purple Orchid Bouquet",
      price: 699,
      image: flower1,
    },
    {
      name: "Rose Bouquet",
      price: 599,
      image: flower2,
    },
    {
      name: "Mixed Flower Basket",
      price: 899,
      image: flower3,
    },
    {
      name: "Pink Bouquet",
      price: 799,
      image: pinkBouquet,
    },
    {
      name: "Blue Orchid",
      price: 749,
      image: orchid1,
    },
  ];

  return (
    <Container className="my-5">

      {/* Heading */}
      <div className="text-center mb-4">
        <h2
          style={{
            color: "#2b5605c7",
            fontFamily: "Georgia",
            fontWeight: "bold",
          }}
        >
          <i className="bi bi-arrow-right"></i>{" "}
          Best Sellers
        </h2>

        <p style={{ color: "#555" }}>
          Our most loved flowers and arrangements
        </p>
      </div>

      {/* Products */}
      <Row className="g-4 justify-content-center">

        {products.map((product, index) => (
          <Col
            xs={4}
            key={index}
            className="text-center"
          >

            {/* Product Image */}
            <div
              className="best-seller-circle"
              onClick={() => navigate("/shop")}
            >
              <img
                src={product.image}
                alt={product.name}
              />
            </div>

            {/* Product Name */}
            <h5 className="best-seller-name">
              {product.name}
            </h5>

            {/* Price */}
            <p className="best-seller-price">
              ₹{product.price}
            </p>

            {/* Buttons */}
            <div className="best-seller-buttons">

              {/* Wishlist */}
              <button
                className="wishlist-btn"
                onClick={() => navigate("/wishlist")}
              >
                <i className="bi bi-heart"></i>
              </button>

              {/* Cart */}
              <button
                className="cart-btn"
                onClick={() =>
                  dispatch(
                    addToCart({
                      ...product,
                      id: index,
                    })
                  )
                }
              >
                <i className="bi bi-cart-plus"></i>
              </button>

            </div>

          </Col>
        ))}

      </Row>

    </Container>
  );
}

export default BestSeller;