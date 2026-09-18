import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  Button,
  Alert,
  Spinner,
  Badge,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MyOrders() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

const getStatusMessage = (status) => {
  switch (status) {
    case "Pending":
      return "Your order has been received and is waiting for confirmation.";

    case "Processing":
      return "Your order has been accepted and is now being prepared.";

    case "Shipped":
      return "Your order has been shipped and is on the way.";

    case "Delivered":
      return "Your order has been delivered successfully.";

    case "Cancelled":
      return "Your order has been cancelled.";

    default:
      return "Your order status has been updated.";
  }
};

  // ========================================
  // GET USER ORDERS
  // ========================================
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const savedUser = localStorage.getItem("user");

        if (!savedUser) {
          setMessage("Please login to view your orders.");
          setLoading(false);
          return;
        }

        const user = JSON.parse(savedUser);

        const response = await axios.get(
          `http://localhost:5000/api/orders/user/${user.id}`
        );

        setOrders(response.data);
      } catch (error) {
        console.error("GET USER ORDERS ERROR:", error);

        if (error.response) {
          setMessage(
            error.response.data.message || "Failed to load orders."
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

    fetchOrders();
  }, []);

  // ========================================
  // LOADING
  // ========================================
  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" variant="dark" />
        <p className="mt-3">Loading your orders...</p>
      </Container>
    );
  }

  // ========================================
  // NOT LOGGED IN
  // ========================================
  if (message && orders.length === 0) {
    return (
      <Container className="py-5 text-center">
        <Alert variant="danger">{message}</Alert>

        <Button
          variant="dark"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </Container>
    );
  }

  // ========================================
  // NO ORDERS
  // ========================================
  if (orders.length === 0) {
    return (
      <Container className="py-5 text-center">
        <i
          className="bi bi-box-seam"
          style={{
            fontSize: "60px",
            color: "#7B1FA2",
          }}
        ></i>

        <h3 className="mt-3" style={{ color: "purple" }}>
          No Orders Yet
        </h3>

        <p className="text-muted">
          You haven't placed any orders yet.
        </p>

        <Button
          variant="dark"
          onClick={() => navigate("/shop")}
        >
          Start Shopping
        </Button>
      </Container>
    );
  }

  // ========================================
  // ORDERS
  // ========================================
  return (
    <Container className="py-5">

      <h2
        className="text-center mb-5"
        style={{ color: "purple" }}
      >
        My Orders
      </h2>

      {orders.map((order) => (
        <Card
          key={order._id}
          className="mb-4 shadow-sm border-0"
        >
          <Card.Body>

            {/* Order Header */}
            <div className="d-flex justify-content-between align-items-center mb-3">

              <div>
                <h5 className="mb-1">
                  Order #{order._id.slice(-6).toUpperCase()}
                </h5>

                <small className="text-muted">
                  {new Date(order.createdAt).toLocaleDateString()}
                </small>
              </div>

              <div className="text-end">
               <Badge
                bg={
                 order.orderStatus === "Delivered"
                 ? "success"
                  : order.orderStatus === "Cancelled"
                  ? "danger"
                 : "warning"
                 }
                text={
                order.orderStatus === "Pending"
                ? "dark"
               : "white"
                }
              >
               {order.orderStatus || "Pending"}
            </Badge>

  <p className="text-muted small mt-2 mb-0">
    {getStatusMessage(order.orderStatus || "Pending")}
  </p>
</div>

            </div>

            <hr />

            {/* Products */}
            <h6 className="mb-3">
              Ordered Products
            </h6>

            {order.items.map((item, index) => (
              <div
                key={index}
                className="d-flex justify-content-between mb-2"
              >
                <span>
                  {item.product?.name || "Product"} ×{" "}
                  {item.quantity}
                </span>

                <strong>
                  ₹{(
                    item.price * item.quantity
                  ).toFixed(2)}
                </strong>
              </div>
            ))}

            <hr />

            {/* Shipping */}
            <div className="mb-2">
              <strong>Shipping Address:</strong>
              <p className="text-muted mb-2">
                {order.shippingAddress}
              </p>
            </div>

            {/* Payment */}
            <div className="mb-3">
              <strong>Payment Method:</strong>{" "}
              <span className="text-muted">
                {order.paymentMethod}
              </span>
            </div>

            <hr />

            {/* Total */}
            <div className="d-flex justify-content-between align-items-center">

              <h5 className="mb-0">
                Total
              </h5>

              <h5
                className="text-success mb-0"
              >
                ₹{order.totalAmount.toFixed(2)}
              </h5>

            </div>

          </Card.Body>
        </Card>
      ))}

    </Container>
  );
}

export default MyOrders;