import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminDashboard() {
  const navigate = useNavigate();

  const [productCount, setProductCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [productsResponse, ordersResponse] =
          await Promise.all([
            axios.get("http://localhost:5000/api/products"),
            axios.get("http://localhost:5000/api/orders"),
          ]);

        setProductCount(productsResponse.data.length);
        setOrderCount(ordersResponse.data.length);
        setOrders(ordersResponse.data);
      } catch (error) {
        console.error("Dashboard data error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const pendingCount = orders.filter(
    (order) => order.orderStatus === "Pending"
  ).length;

  const processingCount = orders.filter(
    (order) => order.orderStatus === "Processing"
  ).length;

  const shippedCount = orders.filter(
    (order) => order.orderStatus === "Shipped"
  ).length;

  const deliveredCount = orders.filter(
    (order) => order.orderStatus === "Delivered"
  ).length;

  const totalRevenue = orders.reduce(
    (total, order) =>
      total + Number(order.totalAmount || 0),
    0
  );

  return (
    <Container className="py-5">
      <h2
        className="text-center mb-5"
        style={{
          color: "#6b077d",
          fontFamily: "Georgia",
          fontWeight: "bold",
        }}
      >
        <i className="bi bi-leaf-fill"></i>{" "}
        FLORENZA Admin Dashboard
      </h2>

      <Row className="g-4 mb-5">
        <Col md={4}>
          <Card
            className="text-center shadow-sm border-0"
            style={{
              borderRadius: "12px",
              backgroundColor: "#f3e8ff",
            }}
          >
            <Card.Body className="p-4">
              <i
                className="bi bi-flower1"
                style={{
                  fontSize: "40px",
                  color: "#6b077d",
                }}
              ></i>

              <h3
                className="mt-3 mb-1"
                style={{
                  color: "#6b077d",
                  fontWeight: "bold",
                }}
              >
                {loading ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  productCount
                )}
              </h3>

              <p className="text-muted mb-0">
                Total Products
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card
            className="text-center shadow-sm border-0"
            style={{
              borderRadius: "12px",
              backgroundColor: "#f3e8ff",
            }}
          >
            <Card.Body className="p-4">
              <i
                className="bi bi-box-seam"
                style={{
                  fontSize: "40px",
                  color: "#6b077d",
                }}
              ></i>

              <h3
                className="mt-3 mb-1"
                style={{
                  color: "#6b077d",
                  fontWeight: "bold",
                }}
              >
                {loading ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  orderCount
                )}
              </h3>

              <p className="text-muted mb-0">
                Total Orders
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card
            className="text-center shadow-sm border-0"
            style={{
              borderRadius: "12px",
              backgroundColor: "#f3e8ff",
            }}
          >
            <Card.Body className="p-4">
              <i
                className="bi bi-currency-rupee"
                style={{
                  fontSize: "40px",
                  color: "#6b077d",
                }}
              ></i>

              <h3
                className="mt-3 mb-1"
                style={{
                  color: "#6b077d",
                  fontWeight: "bold",
                }}
              >
                {loading ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  `₹${totalRevenue.toFixed(2)}`
                )}
              </h3>

              <p className="text-muted mb-0">
                Total Revenue
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h4
        className="mb-4"
        style={{
          color: "#6b077d",
          fontFamily: "Georgia",
          fontWeight: "bold",
        }}
      >
        Order Status
      </h4>

      <Row className="g-4 mb-5">
        <Col md={3} sm={6}>
          <Card className="text-center shadow-sm border-0">
            <Card.Body className="p-4">
              <i
                className="bi bi-hourglass-split"
                style={{
                  fontSize: "32px",
                  color: "#6b077d",
                }}
              ></i>

              <h4
                className="mt-3 mb-1"
                style={{
                  color: "#6b077d",
                  fontWeight: "bold",
                }}
              >
                {pendingCount}
              </h4>

              <p className="text-muted mb-0">
                Pending
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} sm={6}>
          <Card className="text-center shadow-sm border-0">
            <Card.Body className="p-4">
              <i
                className="bi bi-arrow-repeat"
                style={{
                  fontSize: "32px",
                  color: "#6b077d",
                }}
              ></i>

              <h4
                className="mt-3 mb-1"
                style={{
                  color: "#6b077d",
                  fontWeight: "bold",
                }}
              >
                {processingCount}
              </h4>

              <p className="text-muted mb-0">
                Processing
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} sm={6}>
          <Card className="text-center shadow-sm border-0">
            <Card.Body className="p-4">
              <i
                className="bi bi-truck"
                style={{
                  fontSize: "32px",
                  color: "#6b077d",
                }}
              ></i>

              <h4
                className="mt-3 mb-1"
                style={{
                  color: "#6b077d",
                  fontWeight: "bold",
                }}
              >
                {shippedCount}
              </h4>

              <p className="text-muted mb-0">
                Shipped
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} sm={6}>
          <Card className="text-center shadow-sm border-0">
            <Card.Body className="p-4">
              <i
                className="bi bi-check-circle"
                style={{
                  fontSize: "32px",
                  color: "#6b077d",
                }}
              ></i>

              <h4
                className="mt-3 mb-1"
                style={{
                  color: "#6b077d",
                  fontWeight: "bold",
                }}
              >
                {deliveredCount}
              </h4>

              <p className="text-muted mb-0">
                Delivered
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h4
        className="mb-4"
        style={{
          color: "#6b077d",
          fontFamily: "Georgia",
          fontWeight: "bold",
        }}
      >
        Management
      </h4>

      <Row className="g-4">
        <Col md={6}>
          <Card className="text-center shadow-sm border-0 p-4">
            <Card.Body>
              <i
                className="bi bi-flower1"
                style={{
                  fontSize: "50px",
                  color: "#6b077d",
                }}
              ></i>

              <Card.Title className="mt-3">
                Product Management
              </Card.Title>

              <Card.Text>
                Add, edit and delete flower products.
              </Card.Text>

              <Button
                style={{
                  backgroundColor: "#6b077d",
                  border: "none",
                }}
                onClick={() => navigate("/admin-products")}
              >
                Manage Products
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="text-center shadow-sm border-0 p-4">
            <Card.Body>
              <i
                className="bi bi-box-seam"
                style={{
                  fontSize: "50px",
                  color: "#6b077d",
                }}
              ></i>

              <Card.Title className="mt-3">
                Order Management
              </Card.Title>

              <Card.Text>
                View customer orders and update order status.
              </Card.Text>

              <Button
                style={{
                  backgroundColor: "#6b077d",
                  border: "none",
                }}
                onClick={() => navigate("/admin-orders")}
              >
                Manage Orders
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminDashboard;