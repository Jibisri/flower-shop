import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {
  removeFromWishlist,
} from "../redux/wishlistSlice";

import { addToCart } from "../redux/cartSlice";

function Wishlist() {
  const dispatch = useDispatch();

  // Get wishlist items from Redux
  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  // Add wishlist item to cart
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <Container className="mt-5 mb-5">

      <h1
        className="text-center mb-5"
        style={{
          color: "#7B1FA2",
          fontFamily: "Georgia",
          fontWeight: "bold",
        }}
      >
        My Wishlist ❤️
      </h1>

      {wishlistItems.length === 0 ? (
        <div className="text-center">

          <i
            className="bi bi-heart"
            style={{
              fontSize: "60px",
              color: "#7B1FA2",
            }}
          ></i>

          <h4 className="mt-3">
            Your wishlist is empty.
          </h4>

          <p className="text-muted">
            Add your favorite flowers to your wishlist.
          </p>

        </div>
      ) : (
        <Row>

          {wishlistItems.map((item) => (
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
                    height: "260px",
                    objectFit: "cover",
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

                  {/* Add To Cart */}

                  <Button
                    variant="dark"
                    className="me-2"
                    onClick={() =>
                      handleAddToCart(item)
                    }
                  >
                    <i className="bi bi-cart-plus"></i>{" "}
                    Add to Cart
                  </Button>

                  {/* Remove Wishlist */}

                  <Button
                    variant="outline-danger"
                    onClick={() =>
                      dispatch(
                        removeFromWishlist(item.id)
                      )
                    }
                  >
                    <i className="bi bi-trash"></i>
                  </Button>

                </Card.Body>

              </Card>
            </Col>
          ))}

        </Row>
      )}

    </Container>
  );
}

export default Wishlist;