import { Container, Row, Col, Button } from "react-bootstrap";

function Hero() {
  return (
    <div className="bg-light py-5">
      <Container>
        <Row className="align-items-center">

          {/* Left Side */}
          <Col md={6}>
            <h1 className="display-4 fw-bold text-success">
              Fresh Flowers for Every Occasion
            </h1>

            <p className="mt-3 text-secondary">
              Surprise your loved ones with beautiful and fresh flowers.
              Explore our collection of roses, lilies, tulips, bouquets,
              and gift flowers.
            </p>

            <Button variant="success" size="lg">
              Shop Now
            </Button>
          </Col>

          {/* Right Side */}
          <Col md={6} className="text-center">
            <img
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=700"
              alt="Flowers"
              className="img-fluid rounded shadow"
            />
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default Hero;