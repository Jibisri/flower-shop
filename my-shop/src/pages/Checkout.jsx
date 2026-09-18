import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { clearCart } from "../redux/cartSlice";

function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Calculate total
  const totalPrice = cartItems.reduce((total, item) => {
    const price = Number(
      String(item.price).replace("₹", "").trim()
    );

    return total + price * (item.quantity || 1);
  }, 0);

  // =========================
  // PLACE ORDER
  // =========================

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    setMessage("");
    setSuccess(false);

    // Get logged-in user
    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
      setMessage("Please login before placing an order.");
      return;
    }

    const user = JSON.parse(savedUser);

    // Check cart
    if (cartItems.length === 0) {
      setMessage("Your cart is empty.");
      return;
    }

    // Check address
    if (!shippingAddress.trim()) {
      setMessage("Please enter your shipping address.");
      return;
    }

    try {
      setLoading(true);

      // Prepare order items

      console.log("CART ITEMS:", cartItems);

      cartItems.forEach((item) => {
     console.log("Product ID:", item.id);
     console.log("Product Name:", item.name);
      console.log("Quantity:", item.quantity);
       });


      const orderItems = cartItems.map((item) => ({
        product: item.id,
        quantity: item.quantity || 1,
        price: Number(
          String(item.price).replace("₹", "").trim()
        ),
      }));

      console.log("ORDER ITEMS:", orderItems);

      // Send order to backend
      const response = await axios.post(
        "http://localhost:5000/api/orders",
        {
          user: user.id,
          items: orderItems,
          totalAmount: totalPrice,
          shippingAddress: shippingAddress.trim(),
          paymentMethod: paymentMethod,
        }
      );

      console.log("Order response:", response.data);

      setSuccess(true);
      setMessage("Order placed successfully! 🌸");

      dispatch(clearCart());

      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (error) {
      console.error("Order error:", error);

      setSuccess(false);

      if (error.response) {
        setMessage(
          error.response.data.message || "Failed to place order."
        );
      } else {
        setMessage(
          "Cannot connect to backend. Please check the server."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5">

      <h2
        className="text-center mb-5"
        style={{ color: "purple" }}
      >
        Checkout
      </h2>

      {message && (
        <Alert
          variant={success ? "success" : "danger"}
          className="mb-4"
        >
          {message}
        </Alert>
      )}

      <Row>

        {/* Shipping Details */}
        <Col md={7}>
          <Card className="shadow-sm border-0">
            <Card.Body>

              <h4
                className="mb-4"
                style={{ color: "purple" }}
              >
                Shipping Details
              </h4>

              <Form onSubmit={handlePlaceOrder}>

                <Form.Group className="mb-4">
                  <Form.Label>
                    Shipping Address
                  </Form.Label>

                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter your complete address"
                    value={shippingAddress}
                    onChange={(e) =>
                      setShippingAddress(e.target.value)
                    }
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>
                    Payment Method
                  </Form.Label>

                  <Form.Select
                    value={paymentMethod}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  >
                    <option>Cash on Delivery</option>
                    <option>UPI</option>
                    <option>Credit / Debit Card</option>
                  </Form.Select>
                </Form.Group>

                <Button
                  type="submit"
                  variant="dark"
                  className="w-100"
                  disabled={loading}
                >
                  {loading ? "Placing Order..." : "Place Order"}
                </Button>

              </Form>

            </Card.Body>
          </Card>
        </Col>

        {/* Order Summary */}
        <Col md={5} className="mt-4 mt-md-0">

          <Card className="shadow border-0">
            <Card.Body>

              <h4
                className="mb-4"
                style={{ color: "purple" }}
              >
                Order Summary
              </h4>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between mb-3"
                >
                  <span>
                    {item.name} × {item.quantity || 1}
                  </span>

                  <strong>
                    ₹
                    {(
                      Number(
                        String(item.price)
                          .replace("₹", "")
                          .trim()
                      ) * (item.quantity || 1)
                    ).toFixed(2)}
                  </strong>
                </div>
              ))}

              <hr />

              <div className="d-flex justify-content-between">
                <h5>Total</h5>

                <h5 className="text-success">
                  ₹{totalPrice.toFixed(2)}
                </h5>
              </div>

            </Card.Body>
          </Card>

        </Col>

      </Row>

    </Container>
  );
}

export default Checkout;