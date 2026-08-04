import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import bgImage from "../assets/bg.image.png";

function Hero() {
  return (
    <div
      className="hero-section py-5"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="align-items-center">

          {/* Left Side */}
          <Col md={6}>
            <h1
              className="fw-bold display-3"
              style={{
                color: "purple",
                lineHeight: "1.2",
              }}
            >
              Exclusive Floral Collection – Shop Today!
            </h1>

            <p
              className="mt-4 d-none d-md-block"
              style={{
                color: "#423645",
                fontSize: "1.1rem",
              }}
            >
              Bring joy to every occasion with our fresh flower collection.
              Shop beautiful roses, lilies, orchids, jasmine, traditional
              pooja flowers, and stunning bouquets, all handpicked for lasting
              freshness.
            </p>

            <Button
            as={Link}
            to="/shop"
              size="lg"
              style={{
                background: "#580a79",
                border: "none",
                color: "white",
                padding: "12px 28px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(123,31,162,0.3)",
              }}
            >
              Shop Now <i class="bi bi-arrow-right"></i>
            </Button>
          </Col>

          {/* Right Side - remove image because flowers are already in background */}
          <Col md={6}></Col>

        </Row>
      </Container>
    </div>
  );
}

export default Hero;