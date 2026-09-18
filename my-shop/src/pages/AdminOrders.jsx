import React, { useEffect, useState } from "react";
import { Container, Card, Table, Badge, Form, Alert, Spinner } from "react-bootstrap";
import axios from "axios";

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  // Get all orders
  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/orders"
      );

      setOrders(response.data);
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

  // Update order status
  const updateStatus = async (orderId, newStatus) => {
    try {
      await axios.put(
        `http://localhost:5000/api/orders/${orderId}`,
        {
          orderStatus: newStatus,
        }
      );

      fetchOrders();

    } catch (error) {
      console.error("UPDATE STATUS ERROR:", error);
      alert("Failed to update order status.");
    }
  };

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" />
        <p className="mt-3">Loading orders...</p>
      </Container>
    );
  }

  return (
    <Container className="py-5">

      <h2
        className="text-center mb-4"
        style={{ color: "purple" }}
      >
        Admin - All Orders
      </h2>

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
            className="mb-4 shadow-sm"
          >
            <Card.Body>

              {/* Order Header */}
              <div className="d-flex justify-content-between align-items-center mb-3">

                <div>
                  <h5>
                    Order #{order._id.slice(-6).toUpperCase()}
                  </h5>

                  <small className="text-muted">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </small>
                </div>

                <Badge bg="secondary">
                  {order.orderStatus || "Pending"}
                </Badge>

              </div>

              <hr />

              {/* Customer */}
              <h6>Customer Details</h6>

              <p className="mb-1">
                <strong>Name:</strong>{" "}
                {order.user?.name || "Customer"}
              </p>

              <p className="mb-3">
                <strong>Email:</strong>{" "}
                {order.user?.email || "N/A"}
              </p>

              {/* Products */}
              <h6>Ordered Products</h6>

              <Table bordered hover responsive>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>

                <tbody>
                  {order.items.map((item, index) => (
                    <tr key={index}>
                      <td>
                        {item.product?.name || "Product"}
                      </td>

                      <td>
                        {item.quantity}
                      </td>

                      <td>
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              {/* Shipping */}
              <p>
                <strong>Shipping Address:</strong>{" "}
                {order.shippingAddress}
              </p>

              {/* Payment */}
              <p>
                <strong>Payment:</strong>{" "}
                {order.paymentMethod}
              </p>

              {/* Total */}
              <h5 className="text-end">
                Total: ₹{order.totalAmount.toFixed(2)}
              </h5>

              <hr />

              {/* Status */}
              <div className="d-flex align-items-center gap-3">

                <strong>Update Status:</strong>

                <Form.Select
                  style={{ maxWidth: "220px" }}
                  value={order.orderStatus || "Pending"}
                  onChange={(e) =>
                    updateStatus(
                      order._id,
                      e.target.value
                    )
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

              </div>

            </Card.Body>
          </Card>
        ))
      )}

    </Container>
  );
}

export default AdminOrders;