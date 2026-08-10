import { Container, Row, Col } from "react-bootstrap";

import flower1 from "../assets/flower-1.png";
import flower2 from "../assets/flower-2.png";
import flower3 from "../assets/flower-3.jpg";

import Contact from "../pages/Contact";

function About() {
  return (
    <>
      <div
        style={{
          background: "#FDF0FA",
          padding: "80px 0",
        }}
      >
        <Container>
          <Row className="align-items-center">

            {/* Left Side */}

            <Col lg={6}>

              <h1
                className="fw-bold mb-4"
                style={{
                  fontSize: "3rem",
                  color: "#2d2d2d",
                }}
              >
                Welcome To FLORENZA
              </h1>

              <p
                style={{
                  fontSize: "18px",
                  color: "#555",
                  lineHeight: "1.8",
                }}
              >
                FLORENZA is your destination for fresh flowers, elegant
                bouquets, and traditional floral collections. We handpick
                every bloom to bring beauty, fragrance, and happiness to
                your special moments.
              </p>

              <Row className="mt-5">

                <Col md={6}>
                  <ul className="list-unstyled">

                    <li className="mb-3">
                      <i className="bi bi-check"></i> Fresh Roses
                    </li>

                    <li className="mb-3">
                      <i className="bi bi-check"></i> Premium Lilies
                    </li>

                    <li className="mb-3">
                      <i className="bi bi-check"></i> Exotic Orchids
                    </li>

                    <li className="mb-3">
                      <i className="bi bi-check"></i> Fragrant Jasmine
                    </li>

                    <li className="mb-3">
                      <i className="bi bi-check"></i> Pooja Flowers
                    </li>

                  </ul>
                </Col>

                <Col md={6}>
                  <ul className="list-unstyled">

                    <li className="mb-3">
                      <i className="bi bi-check"></i> Elegant Bouquets
                    </li>

                    <li className="mb-3">
                      <i className="bi bi-check"></i> Floral Gifts
                    </li>

                    <li className="mb-3">
                      <i className="bi bi-check"></i> Wedding Flowers
                    </li>

                    <li className="mb-3">
                      <i className="bi bi-check"></i> Seasonal Flowers
                    </li>

                    <li className="mb-3">
                      <i className="bi bi-check"></i> Event Decoration
                    </li>

                  </ul>
                </Col>

              </Row>

            </Col>

            {/* Right Side */}

            <Col lg={6}>

              <img
                src={flower1}
                alt=""
                className="img-fluid rounded-5 mb-3"
                style={{
                  width: "100%",
                  height: "420px",
                  objectFit: "cover",
                }}
              />

              <Row>

                <Col xs={6}>
                  <img
                    src={flower2}
                    alt=""
                    className="img-fluid rounded-5"
                    style={{
                      height: "200px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Col>

                <Col xs={6}>
                  <img
                    src={flower3}
                    alt=""
                    className="img-fluid rounded-5"
                    style={{
                      height: "200px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Col>

              </Row>

            </Col>

          </Row>
        </Container>
      </div>

      <h2 className="ms-5 mt-4" style={{color:"#2b5605c7"}}>
        <i class="bi bi-arrow-right"></i>
        Contact us</h2>#2b5605c7#2b5605c7

      <Contact />
    </>
  );
}

export default About;