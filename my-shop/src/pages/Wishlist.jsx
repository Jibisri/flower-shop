import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { removeFromWishlist } from "../redux/wishlistSlice";
import { addToCart } from "../redux/cartSlice";

function Wishlist() {
  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

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
              xs={6}
              md={4}
              className="mb-4"
              key={item.id}
            >
              <Card
                className="shadow border-0 h-100"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              >
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.name}
                  className="wishlist-image"
                  style={{
                    height: "260px",
                    objectFit: "cover",
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                />

                <Card.Body className="text-center">
                  <Card.Title className="wishlist-card-title">
                    {item.name}
                  </Card.Title>

                  <h5 className="text-success mb-3 wishlist-price">
                    {item.price}
                  </h5>

                  <Button
                    variant="dark"
                    className="me-2 wishlist-card-button"
                    onClick={() => handleAddToCart(item)}
                  >
                    <i className="bi bi-cart-plus"></i>{" "}
                    Add to Cart
                  </Button>

                  <Button
                    variant="outline-danger"
                    className="wishlist-card-button"
                    onClick={() =>
                      dispatch(removeFromWishlist(item.id))
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