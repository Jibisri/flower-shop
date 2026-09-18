import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <Container className="py-5">

      <h2
        className="text-center mb-5"
        style={{ color: "purple" }}
      >
        🌸 FLORENZA Admin Dashboard
      </h2>

      <Row className="g-4">

        {/* Products */}
        <Col md={6}>
          <Card className="text-center shadow-sm border-0 p-4">

            <Card.Body>
              <i
                className="bi bi-flower1"
                style={{
                  fontSize: "50px",
                  color: "purple"
                }}
              ></i>

              <Card.Title className="mt-3">
                Product Management
              </Card.Title>

              <Card.Text>
                Add, edit and delete flower products.
              </Card.Text>

              <Button
                variant="dark"
                onClick={() => navigate("/admin-products")}
              >
                Manage Products
              </Button>
            </Card.Body>

          </Card>
        </Col>

        {/* Orders */}
        <Col md={6}>
          <Card className="text-center shadow-sm border-0 p-4">

            <Card.Body>
              <i
                className="bi bi-box-seam"
                style={{
                  fontSize: "50px",
                  color: "purple"
                }}
              ></i>

              <Card.Title className="mt-3">
                Order Management
              </Card.Title>

              <Card.Text>
                View customer orders and update order status.
              </Card.Text>

              <Button
                variant="dark"
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
