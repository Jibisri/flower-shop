import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => {
      const price = Number(
        item.price.replace("₹", "")
      );

      return total + price * (item.quantity || 1);
    },
    0
  );

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
        My Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <i
            className="bi bi-cart-x"
            style={{
              fontSize: "60px",
              color: "#7B1FA2",
            }}
          ></i>

          <h4 className="mt-3">
            Your cart is empty.
          </h4>

          <p className="text-muted">
            Add some beautiful flowers to your cart.
          </p>
        </div>
      ) : (
        <>
          <Row>

            {/* Cart Products */}

            <Col lg={8}>
              {cartItems.map((item) => (
                <Card
                  key={item.id}
                  className="mb-3 shadow-sm border-0"
                >
                  <Card.Body>

                    <Row className="align-items-center">

                      {/* Image */}

                      <Col xs={4} md={3}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid rounded"
                          style={{
                            height: "120px",
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Col>

                      {/* Product Details */}

                      <Col xs={8} md={5}>
                        <h5>
                          {item.name}
                        </h5>

                        <p className="text-success fw-bold">
                          {item.price}
                        </p>
                      </Col>

                      {/* Quantity */}

                      <Col
                        xs={7}
                        md={3}
                        className="mt-3 mt-md-0"
                      >
                        <div className="d-flex align-items-center">

                          <Button
                            variant="outline-dark"
                            size="sm"
                            onClick={() =>
                              dispatch(
                                decreaseQuantity(item.id)
                              )
                            }
                          >
                            −
                          </Button>

                          <span className="mx-3 fw-bold">
                            {item.quantity || 1}
                          </span>

                          <Button
                            variant="outline-dark"
                            size="sm"
                            onClick={() =>
                              dispatch(
                                increaseQuantity(item.id)
                              )
                            }
                          >
                            +
                          </Button>

                        </div>
                      </Col>

                      {/* Remove */}

                      <Col
                        xs={5}
                        md={1}
                        className="text-end mt-3 mt-md-0"
                      >
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() =>
                            dispatch(
                              removeFromCart(item.id)
                            )
                          }
                        >
                          <i className="bi bi-trash"></i>
                        </Button>
                      </Col>

                    </Row>

                  </Card.Body>
                </Card>
              ))}
            </Col>

            {/* Order Summary */}

            <Col lg={4}>

              <Card className="shadow border-0">

                <Card.Body>

                  <h4 className="mb-4">
                    Order Summary
                  </h4>

                  <div className="d-flex justify-content-between mb-3">
                    <span>Subtotal</span>

                    <strong>
                      ₹{totalPrice}
                    </strong>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <span>Delivery</span>

                    <span className="text-success">
                      Free
                    </span>
                  </div>

                  <hr />

                  <div className="d-flex justify-content-between mb-4">
                    <h5>Total</h5>

                    <h5 className="text-success">
                      ₹{totalPrice}
                    </h5>
                  </div>

                  <Button
                    variant="dark"
                    className="w-100"
                  >
                    Proceed to Checkout
                  </Button>

                </Card.Body>

              </Card>

            </Col>{/* Quantity */}

<Col
  xs={7}
  md={3}
  className="mt-3 mt-md-0"
>
  <div className="d-flex align-items-center">

    {/* Decrease */}

    <Button
      variant="outline-dark"
      size="sm"
      onClick={() =>
        dispatch(decreaseQuantity(item.id))
      }
      disabled={(item.quantity || 1) <= 1}
    >
      −
    </Button>

    {/* Quantity */}

    <span className="mx-3 fw-bold">
      {item.quantity || 1}{/* Quantity */}

<Col
  xs={7}
  md={3}
  className="mt-3 mt-md-0"
>
  <div className="d-flex align-items-center">

    {/* Decrease */}

    <Button
      variant="outline-dark"
      size="sm"
      onClick={() =>
        dispatch(decreaseQuantity(item.id))
      }
      disabled={(item.quantity || 1) <= 1}
    >
      −
    </Button>
{/* Quantity */}

<Col
  xs={7}
  md={3}
  className="mt-3 mt-md-0"
>
  <div className="d-flex align-items-center">

    {/* Decrease */}

    <Button
      variant="outline-dark"
      size="sm"
      onClick={() =>
        dispatch(decreaseQuantity(item.id))
      }
      disabled={(item.quantity || 1) <= 1}
    >
      −
    </Button>

    {/* Quantity */}

    <span className="mx-3 fw-bold">
      {item.quantity || 1}
    </span>

    {/* Increase */}

    <Button
      variant="outline-dark"
      size="sm"
      onClick={() =>
        dispatch(increaseQuantity(item.id))
      }
      disabled={(item.quantity || 1) >= 20}
    >
      +
    </Button>

  </div>
</Col>
    {/* Quantity */}

    <span className="mx-3 fw-bold">
      {item.quantity || 1}
    </span>

    {/* Increase */}

    <Button
      variant="outline-dark"
      size="sm"
      onClick={() =>
        dispatch(increaseQuantity(item.id))
      }
      disabled={(item.quantity || 1) >= 20}
    >
      +
    </Button>

  </div>
</Col>
    </span>

    {/* Increase */}

    <Button
      variant="outline-dark"
      size="sm"
      onClick={() =>
        dispatch(increaseQuantity(item.id))
      }
      disabled={(item.quantity || 1) >= 20}
    >
      +
    </Button>

  </div>
</Col>

          </Row>
        </>
      )}

    </Container>
  );
}

export default Cart;