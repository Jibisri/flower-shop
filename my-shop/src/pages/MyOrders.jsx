import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  Button,
  Alert,
  Spinner,
  Row,
  Col,
  Modal,
  Badge,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MyOrders() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const [showHistory, setShowHistory] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

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

  const formatDate = (date) => {
    if (!date) {
      return "Not available";
    }

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatDateTime = (date) => {
    if (!date) {
      return "Not available";
    }

    return new Date(date).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

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
            error.response.data.message ||
              "Failed to load orders."
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

  const getStatusBadge = (status) => {
    return (
      <Badge
        pill
        style={{
          backgroundColor: "#8000FF",
          color: "#FFFFFF",
          padding: "9px 18px",
          fontSize: "14px",
        }}
      >
        {status}
      </Badge>
    );
  };

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" variant="dark" />

        <p className="mt-3">
          Loading your orders...
        </p>
      </Container>
    );
  }

  if (message && orders.length === 0) {
    return (
      <Container className="py-5 text-center">
        <Alert variant="danger">
          {message}
        </Alert>

        <Button
          variant="dark"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </Container>
    );
  }

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

        <h3
          className="mt-3"
          style={{ color: "purple" }}
        >
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

  return (
    <Container
      className="py-5"
      style={{
        backgroundColor: "#fff",
        minHeight: "100vh",
      }}
    >
      <div className="text-center mb-5">
        <h2
          style={{
            color: "#6b077d",
            fontFamily: "Georgia",
            fontWeight: "bold",
          }}
        >
          My Orders
        </h2>

        <p className="text-muted">
          View your flower order updates
        </p>
      </div>

      {orders.map((order) => {
        const status = order.orderStatus || "Pending";

        return (
          <Card
            key={order._id}
            className="mb-4 shadow-sm border-0"
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              borderRadius: "12px",
              border: "1px solid #eeeeee",
            }}
          >
            <Card.Body className="p-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h5
                    className="mb-1"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Order #
                    {order._id.slice(-6).toUpperCase()}
                  </h5>

                  <div className="text-muted small">
                    Order placed on{" "}
                    {formatDate(order.createdAt)}
                  </div>
                </div>

                <div>
                  {getStatusBadge(status)}
                </div>
              </div>

              <hr />

              <div className="mb-4">
                <div className="d-flex align-items-center">
                  <i
                    className="bi bi-calendar-check-fill"
                    style={{
                      color: "#673ab7",
                      fontSize: "20px",
                      marginRight: "12px",
                    }}
                  ></i>

                  <div>
                    <div
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Delivery Date
                    </div>

                    <div className="text-muted small">
                      {formatDate(order.deliveryDate)}
                    </div>
                  </div>
                </div>
              </div>

              {order.items.map((item, index) => (
                <div key={index}>
                  <Row className="align-items-center mb-3">
                    <Col xs={12}>
                      <h6
                        className="mb-1"
                        style={{
                          fontWeight: "bold",
                          color: "#7a0c66",
                        }}
                      >
                        {item.product?.name ||
                          "Flower Product"}
                      </h6>

                      <div className="text-muted small">
                        Qty: {item.quantity}
                      </div>

                      <strong>
                        ₹
                        {(
                          Number(item.price) *
                          Number(item.quantity)
                        ).toFixed(2)}
                      </strong>
                    </Col>
                  </Row>

                  {index < order.items.length - 1 && <hr />}
                </div>
              ))}

              <div className="mb-3">
                <div className="d-flex align-items-start">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle text-white"
                    style={{
                      width: "24px",
                      height: "24px",
                      minWidth: "24px",
                      backgroundColor: "#198754",
                      fontSize: "13px",
                    }}
                  >
                    ✓
                  </div>

                  <div className="ms-3">
                    <div className="fw-semibold">
                      Order Confirmed
                    </div>

                    <small className="text-muted">
                      {formatDate(order.createdAt)}
                    </small>
                  </div>
                </div>

                {status !== "Cancelled" && (
                  <div
                    style={{
                      height: "28px",
                      width: "2px",
                      backgroundColor: "#198754",
                      marginLeft: "11px",
                    }}
                  ></div>
                )}

                <div className="d-flex align-items-start">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle text-white"
                    style={{
                      width: "24px",
                      height: "24px",
                      minWidth: "24px",
                      backgroundColor:
                        status === "Cancelled"
                          ? "#dc3545"
                          : "#198754",
                      fontSize: "13px",
                    }}
                  >
                    {status === "Cancelled" ? "×" : "✓"}
                  </div>

                  <div className="ms-3">
                    <div
                      className="fw-semibold"
                      style={{
                        color:
                          status === "Cancelled"
                            ? "#dc3545"
                            : "#198754",
                      }}
                    >
                      {status === "Cancelled"
                        ? "Cancelled"
                        : status}
                    </div>

                    <small className="text-muted">
                      Current order status
                    </small>
                  </div>
                </div>
              </div>

              <Button
                variant="link"
                className="p-0 text-decoration-none fw-semibold mb-3"
                style={{
                  color: "#6b077d",
                }}
                onClick={() => {
                  setSelectedOrder(order);
                  setShowHistory(true);
                }}
              >
                See All Updates
                <i className="bi bi-chevron-right ms-2"></i>
              </Button>

              <Alert
                variant="light"
                className="mb-4"
                style={{
                  border: "none",
                  backgroundColor:
                    status === "Cancelled"
                      ? "#fff1f2"
                      : "#e9d5ff",
                  color: "#000000",
                }}
              >
                <i
                  className={
                    status === "Cancelled"
                      ? "bi bi-exclamation-circle me-2"
                      : "bi bi-info-circle me-2"
                  }
                ></i>

                {getStatusMessage(status)}
              </Alert>

              <hr />

              <div className="d-flex justify-content-between align-items-center">
                <h6
                  className="mb-0"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Total
                </h6>

                <h5
                  className="mb-0"
                  style={{
                    color: "#16803c",
                    fontWeight: "bold",
                  }}
                >
                  ₹{Number(order.totalAmount).toFixed(2)}
                </h5>
              </div>
            </Card.Body>
          </Card>
        );
      })}

      <Modal
        show={showHistory}
        onHide={() => setShowHistory(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              color: "#6b077d",
              fontFamily: "Georgia",
              fontWeight: "bold",
            }}
          >
            Order Updates 🌸
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="p-4">
          <div
            className="p-4 mb-4"
            style={{
              backgroundColor: "#f3e8ff",
              border: "1px solid #6b077d",
              borderRadius: "12px",
              textAlign: "left",
            }}
          >
            <div className="mb-4">
              <h6
                style={{
                  fontWeight: "bold",
                  color: "#29294d",
                }}
              >
                <i
                  className="bi bi-geo-alt-fill me-2"
                  style={{
                    color: "#6b077d",
                  }}
                ></i>
                Shipping Address
              </h6>

              <p
                className="text-muted mt-2 mb-0"
                style={{
                  lineHeight: "1.6",
                  textAlign: "left",
                }}
              >
                {selectedOrder?.shippingAddress ||
                  "Not available"}
              </p>
            </div>

            <div>
              <h6
                style={{
                  fontWeight: "bold",
                  color: "#29294d",
                }}
              >
                <i
                  className="bi bi-credit-card-fill me-2"
                  style={{
                    color: "#6b077d",
                  }}
                ></i>
                Payment Method
              </h6>

              <p
                className="text-muted mt-2 mb-0"
                style={{
                  textAlign: "left",
                }}
              >
                {selectedOrder?.paymentMethod ||
                  "Not available"}
              </p>
            </div>
          </div>

          <hr />

          <h6
            className="mb-4"
            style={{
              fontWeight: "bold",
              color: "#29294d",
            }}
          >
            Order Status
          </h6>

          {selectedOrder?.statusHistory?.length > 0 ? (
            selectedOrder.statusHistory.map(
              (history, index) => {
                const isCancelled =
                  history.status === "Cancelled";

                return (
                  <div
                    key={index}
                    className="d-flex align-items-start"
                    style={{
                      marginBottom:
                        index <
                        selectedOrder.statusHistory.length - 1
                          ? "0"
                          : "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div
                        className="d-flex align-items-center justify-content-center rounded-circle text-white"
                        style={{
                          width: "30px",
                          height: "30px",
                          minWidth: "30px",
                          backgroundColor:
                            isCancelled
                              ? "#dc3545"
                              : "#198754",
                          fontSize: "14px",
                        }}
                      >
                        {isCancelled ? "×" : "✓"}
                      </div>

                      {index <
                        selectedOrder.statusHistory.length -
                          1 && (
                        <div
                          style={{
                            height: "45px",
                            width: "2px",
                            backgroundColor: "#198754",
                          }}
                        ></div>
                      )}
                    </div>

                    <div
                      className="ms-3"
                      style={{
                        paddingTop: "3px",
                      }}
                    >
                      <div
                        style={{
                          fontWeight: "600",
                          color: isCancelled
                            ? "#dc3545"
                            : "#29294d",
                        }}
                      >
                        {history.status}
                      </div>

                      <small className="text-muted">
                        {formatDateTime(history.date)}
                      </small>
                    </div>
                  </div>
                );
              }
            )
          ) : (
            <p className="text-muted">
              No status updates available.
            </p>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={() => setShowHistory(false)}
            style={{
              backgroundColor: "#6b077d",
              border: "none",
              padding: "10px 30px",
              borderRadius: "8px",
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default MyOrders;