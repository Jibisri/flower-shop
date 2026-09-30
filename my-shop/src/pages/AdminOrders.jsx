import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  Table,
  Badge,
  Form,
  Alert,
  Spinner,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import axios from "axios";

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [selectedStatuses, setSelectedStatuses] = useState({});

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/orders"
      );

      setOrders(response.data);

      const statusValues = {};

      response.data.forEach((order) => {
        statusValues[order._id] =
          order.orderStatus || "Pending";
      });

      setSelectedStatuses(statusValues);
    } catch (error) {
      console.error("GET ALL ORDERS ERROR:", error);
      setMessage("Failed to load orders.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (orderId) => {
    const newStatus =
      selectedStatuses[orderId] || "Pending";

    try {
      await axios.put(
        `http://localhost:5000/api/orders/${orderId}`,
        {
          orderStatus: newStatus,
        }
      );

      alert("Order status updated successfully! 🌸");

      fetchOrders();
    } catch (error) {
      console.error("UPDATE STATUS ERROR:", error);

      alert(
        error.response?.data?.message ||
          "Failed to update order status."
      );
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Processing":
        return {
          backgroundColor: "#f3e8ff",
          color: "#6b077d",
        };

      case "Shipped":
        return {
          backgroundColor: "#ede9fe",
          color: "#5b21b6",
        };

      case "Delivered":
        return {
          backgroundColor: "#dcfce7",
          color: "#166534",
        };

      case "Cancelled":
        return {
          backgroundColor: "#fee2e2",
          color: "#b91c1c",
        };

      default:
        return {
          backgroundColor: "#f3f4f6",
          color: "#374151",
        };
    }
  };

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" />

        <p className="mt-3">
          Loading orders...
        </p>
      </Container>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#faf7ff",
        minHeight: "100vh",
        paddingBottom: "50px",
      }}
    >
      <Container className="py-5">

        <div className="text-center mb-5">
          <div
            style={{
              fontSize: "38px",
              color: "#6b077d",
              marginBottom: "5px",
            }}
          >
            🌸
          </div>

          <h2
            style={{
              color: "#6b077d",
              fontWeight: "700",
              marginBottom: "5px",
            }}
          >
            Admin - All Orders
          </h2>

          <p
            style={{
              color: "#7c5a91",
              marginBottom: 0,
            }}
          >
            View and manage customer orders
          </p>
        </div>

        {message && (
          <Alert variant="danger">
            {message}
          </Alert>
        )}

        {orders.length === 0 ? (
          <Alert variant="info">
            No orders found.
          </Alert>
        ) : (
          orders.map((order) => (
            <Card
              key={order._id}
              className="mb-4"
              style={{
                border: "1px solid #e3d1f5",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow:
                  "0 5px 18px rgba(107, 7, 125, 0.10)",
              }}
            >

              {/* Order Header */}

              <div
                style={{
                  background:
                    "linear-gradient(135deg, #f5ebff, #ffffff)",
                  padding: "22px 25px",
                  borderBottom:
                    "1px solid #eadcf5",
                }}
              >
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">

                  <div>
                    <h4
                      style={{
                        color: "#3d1454",
                        fontWeight: "700",
                        marginBottom: "6px",
                      }}
                    >
                      Order #
                      {order._id
                        .slice(-6)
                        .toUpperCase()}
                    </h4>

                    <small
                      style={{
                        color: "#80658f",
                      }}
                    >
                      Placed on{" "}
                      {new Date(
                        order.createdAt
                      ).toLocaleDateString()}
                    </small>
                  </div>

                  <Badge
                    pill
                    style={{
                      ...getStatusStyle(
                        order.orderStatus
                      ),
                      padding: "9px 17px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    {order.orderStatus ||
                      "Pending"}
                  </Badge>

                </div>
              </div>

              <Card.Body className="p-4">

                {/* Customer and Products */}

                <Row className="g-4 mb-4">

                  {/* Customer Details */}

                  <Col md={5}>
                    <div
                      style={{
                        backgroundColor: "#faf7ff",
                        borderRadius: "12px",
                        padding: "20px",
                        height: "100%",
                        border: "1px solid #eadcf5",
                        textAlign: "left",
                      }}
                    >
                      <h5
                        style={{
                          color: "#6b077d",
                          fontWeight: "700",
                          marginBottom: "18px",
                        }}
                      >
                        <i
                          className="bi bi-person-fill"
                          style={{
                            marginRight: "10px",
                          }}
                        ></i>
                        Customer Details
                      </h5>

                      <p className="mb-3">
                        <strong>Name:</strong>{" "}
                        {order.user?.name ||
                          "Customer"}
                      </p>

                      <p className="mb-0">
                        <strong>Email:</strong>{" "}
                        {order.user?.email ||
                          "N/A"}
                      </p>
                    </div>
                  </Col>

                  {/* Products */}

                  <Col md={7}>
                    <div
                      style={{
                        backgroundColor: "#faf7ff",
                        borderRadius: "12px",
                        padding: "20px",
                        height: "100%",
                        border: "1px solid #eadcf5",
                      }}
                    >
                      <h5
                        style={{
                          color: "#6b077d",
                          fontWeight: "700",
                          marginBottom: "15px",
                        }}
                      >
                        🌸
                        <span
                          style={{
                            marginLeft: "10px",
                          }}
                        >
                          Ordered Products
                        </span>
                      </h5>

                      <Table
                        bordered
                        responsive
                        className="mb-0"
                        style={{
                          backgroundColor: "white",
                        }}
                      >
                        <thead>
                          <tr
                            style={{
                              backgroundColor:
                                "#f1e4ff",
                            }}
                          >
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                          </tr>
                        </thead>

                        <tbody>
                          {order.items.map(
                            (item, index) => (
                              <tr key={index}>
                                <td>
                                  <strong
                                    style={{
                                      color: "#6b077d",
                                    }}
                                  >
                                    {item.product?.name ||
                                      "Product"}
                                  </strong>
                                </td>

                                <td>
                                  {item.quantity}
                                </td>

                                <td>
                                  ₹
                                  {(
                                    item.price *
                                    item.quantity
                                  ).toFixed(2)}
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </Table>
                    </div>
                  </Col>
                </Row>

                {/* Shipping / Payment / Delivery */}

                <Row className="g-3 mb-4">

                  {/* Shipping */}

                  <Col md={4}>
                    <div
                      style={{
                        backgroundColor: "#faf7ff",
                        borderRadius: "12px",
                        padding: "18px",
                        height: "100%",
                        border: "1px solid #eadcf5",
                      }}
                    >
                      <h6
                        style={{
                          color: "#6b077d",
                          fontWeight: "700",
                          marginBottom: "12px",
                        }}
                      >
                        <i
                          className="bi bi-truck"
                          style={{
                            marginRight: "10px",
                          }}
                        ></i>
                        Shipping Address
                      </h6>

                      <p className="mb-0">
                        {order.shippingAddress ||
                          "Not available"}
                      </p>
                    </div>
                  </Col>

                  {/* Payment */}

                  <Col md={4}>
                    <div
                      style={{
                        backgroundColor: "#faf7ff",
                        borderRadius: "12px",
                        padding: "18px",
                        height: "100%",
                        border: "1px solid #eadcf5",
                      }}
                    >
                      <h6
                        style={{
                          color: "#6b077d",
                          fontWeight: "700",
                          marginBottom: "12px",
                        }}
                      >
                        <i
                          className="bi bi-credit-card"
                          style={{
                            marginRight: "10px",
                          }}
                        ></i>
                        Payment Method
                      </h6>

                      <p className="mb-0">
                        {order.paymentMethod ||
                          "Not available"}
                      </p>
                    </div>
                  </Col>

                  {/* Delivery Date */}

                  <Col md={4}>
                    <div
                      style={{
                        backgroundColor: "#faf7ff",
                        borderRadius: "12px",
                        padding: "18px",
                        height: "100%",
                        border: "1px solid #eadcf5",
                      }}
                    >
                      <h6
                        style={{
                          color: "#6b077d",
                          fontWeight: "700",
                          marginBottom: "12px",
                        }}
                      >
                        <i
                          className="bi bi-calendar2-month"
                          style={{
                            marginRight: "10px",
                          }}
                        ></i>
                        Delivery Date
                      </h6>

                      <p className="mb-0">
                        {order.deliveryDate
                          ? new Date(
                              order.deliveryDate
                            ).toLocaleDateString()
                          : "Not selected"}
                      </p>
                    </div>
                  </Col>
                </Row>

                {/* Total */}

                <div
                  className="d-flex justify-content-end mb-4"
                  style={{
                    borderTop: "1px solid #eadcf5",
                    paddingTop: "20px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#ecfdf5",
                      border: "1px solid #bbf7d0",
                      borderRadius: "12px",
                      padding: "14px 25px",
                    }}
                  >
                    <span
                      style={{
                        color: "#166534",
                        fontWeight: "600",
                        marginRight: "15px",
                      }}
                    >
                      Total Amount
                    </span>

                    <strong
                      style={{
                        color: "#16803c",
                        fontSize: "22px",
                      }}
                    >
                      <i
                        className="bi bi-currency-rupee"
                        style={{
                          marginRight: "3px",
                        }}
                      ></i>

                      {Number(
                        order.totalAmount || 0
                      ).toFixed(2)}
                    </strong>
                  </div>
                </div>

                {/* Update Status */}

                <div
                  style={{
                    backgroundColor: "#faf7ff",
                    borderRadius: "12px",
                    padding: "20px",
                    border: "1px solid #eadcf5",
                  }}
                >
                  <h5
                    style={{
                      color: "#6b077d",
                      fontWeight: "700",
                      marginBottom: "15px",
                    }}
                  >
                    <i
                      className="bi bi-arrow-repeat"
                      style={{
                        marginRight: "10px",
                      }}
                    ></i>
                    Update Order Status
                  </h5>

                  <div className="d-flex flex-wrap align-items-center gap-3">
                    <Form.Select
                      style={{
                        maxWidth: "300px",
                        borderRadius: "10px",
                        border: "1px solid #c9a8df",
                      }}
                      value={
                        selectedStatuses[order._id] ||
                        order.orderStatus ||
                        "Pending"
                      }
                      onChange={(e) =>
                        setSelectedStatuses({
                          ...selectedStatuses,
                          [order._id]: e.target.value,
                        })
                      }
                    >
                      <option value="Pending">
                        Pending
                      </option>

                      <option value="Processing">
                        Processing
                      </option>

                      <option value="Shipped">
                        Shipped
                      </option>

                      <option value="Delivered">
                        Delivered
                      </option>

                      <option value="Cancelled">
                        Cancelled
                      </option>
                    </Form.Select>

                    <Button
                      onClick={() =>
                        updateStatus(order._id)
                      }
                      style={{
                        backgroundColor: "#6b077d",
                        borderColor: "#6b077d",
                        borderRadius: "10px",
                        padding: "10px 22px",
                        fontWeight: "600",
                      }}
                    >
                      ✓ Update Status
                    </Button>
                  </div>
                </div>

              </Card.Body>
            </Card>
          ))
        )}
      </Container>
    </div>
  );
}

export default AdminOrders;