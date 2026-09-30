import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ContactSection() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        background: "#f7f1ff",
        padding: "50px 0 0",
        textAlign: "left",
      }}
    >
      <Container>
        <Row>

          {/* Contact */}

          <Col md={4} className="mb-4">
            <h4
              style={{
                color: "#7a11a3",
                fontWeight: "700",
                marginBottom: "25px",
              }}
            >
              Contact
            </h4>

            <p className="text-muted mb-3">
              <i
                className="bi bi-geo-alt-fill me-2"
                style={{ color: "#7a11a3" }}
              ></i>
              Coimbatore, Tamil Nadu
            </p>

            <p className="text-muted mb-3">
              <i
                className="bi bi-telephone-fill me-2"
                style={{ color: "#7a11a3" }}
              ></i>
              +91 98765 43210
            </p>

            <p className="text-muted mb-3">
              <i
                className="bi bi-envelope-fill me-2"
                style={{ color: "#7a11a3" }}
              ></i>
              support@florenza.com
            </p>
          </Col>

          {/* Information */}

          <Col md={4} className="mb-4">
            <h4
              style={{
                color: "#7a11a3",
                fontWeight: "700",
                marginBottom: "25px",
              }}
            >
              Information
            </h4>

            <p
              className="text-muted mb-3"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/about")}
            >
              About Us
            </p>

            <p
              className="text-muted mb-3"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/my-orders")}
            >
              Delivery Information
            </p>

            <p
              className="text-muted mb-3"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/about")}
            >
              Privacy Policy
            </p>

            <p
              className="text-muted mb-3"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/about")}
            >
              Terms & Conditions
            </p>
          </Col>

          {/* Customer Care */}

          <Col md={4} className="mb-4">
            <h4
              style={{
                color: "#7a11a3",
                fontWeight: "700",
                marginBottom: "25px",
              }}
            >
              Customer Care
            </h4>

            <p
              className="text-muted mb-3"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              My Account
            </p>

            <p
              className="text-muted mb-3"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/my-orders")}
            >
              Track Order
            </p>

            <p
              className="text-muted mb-3"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/wishlist")}
            >
              Wishlist
            </p>

            <p
              className="text-muted mb-3"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </p>
          </Col>

        </Row>
      </Container>

      {/* Bottom Bar */}

      <div
        style={{
          background: "#5f0d65",
          color: "white",
          marginTop: "20px",
          padding: "18px 20px",
        }}
      >
        <Container>
          <Row className="align-items-center">

            <Col
              xs={12}
              md={6}
              className="text-center text-md-start"
            >
              <p className="mb-0">
                © 2026 FLORENZA. All rights reserved.
              </p>
            </Col>

            <Col
              xs={12}
              md={6}
              className="text-center text-md-end mt-3 mt-md-0"
            >
              <i className="bi bi-facebook fs-5 me-4"></i>

              <i className="bi bi-instagram fs-5 me-4"></i>

              <i className="bi bi-youtube fs-5 me-4"></i>

              <i className="bi bi-pinterest fs-5"></i>
            </Col>

          </Row>
        </Container>
      </div>
    </section>
  );
}

export default ContactSection;