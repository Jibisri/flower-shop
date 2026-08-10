import { Container, Row, Col } from "react-bootstrap";

function ContactSection() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "70px 0",
      }}
    >
      <Container>
        <Row>

          {/* Contact */}
          <Col md={4}>
            <h4 className="fw-bold mb-4">Contact</h4>

            <p className="text-muted mb-2">
              <i className="bi bi-geo-alt-fill me-2" style={{color:"purple"}} ></i>
              Coimbatore, Tamil Nadu
            </p>

            <p className="text-muted mb-2">
              <i className="bi bi-telephone-fill me-2" style={{color:"purple"}}></i>
              +91 98765 43210
            </p>

            <p className="text-muted">
              <i className="bi bi-envelope-fill me-2" style={{color:"purple"}} ></i>
              support@florenza.com
            </p>
          </Col>

          {/* Information */}
          <Col md={4}>
            <h4 className="fw-bold mb-4">Information</h4>

            <p className="text-muted">About Us</p>
            <p className="text-muted">Delivery Information</p>
            <p className="text-muted">Privacy Policy</p>
            <p className="text-muted">Terms & Conditions</p>
          </Col>

          {/* Customer Care */}
          <Col md={4}>
            <h4 className="fw-bold mb-4">Customer Care</h4>

            <p className="text-muted">My Account</p>
            <p className="text-muted">Track Order</p>
            <p className="text-muted">Wishlist</p>
            <p className="text-muted">Contact Us</p>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default ContactSection;