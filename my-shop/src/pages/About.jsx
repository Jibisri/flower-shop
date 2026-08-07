import { Container, Row, Col } from "react-bootstrap";

import flower1 from "../assets/flower-1.png";
import flower2 from "../assets/flower-2.png";
import flower3 from "../assets/flower-3.jpg";



function About() {
  return (
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
              FLORENZA is your destination for fresh flowers, elegant bouquets,
              and traditional floral collections. We handpick every bloom to
              bring beauty, fragrance, and happiness to your special moments.
            </p>

            <Row className="mt-5">

              <Col md={6}>

                <ul className="list-unstyled">

                  <li className="mb-3">
                    <i class="bi bi-check"></i>  Fresh Roses</li>

                  <li className="mb-3">
                    <i class="bi bi-check"></i>  Premium Lilies</li>

                  <li className="mb-3">
                    <i class="bi bi-check"></i> Exotic Orchids</li>

                  <li className="mb-3">
                    <i class="bi bi-check"></i>  Fragrant Jasmine</li>

                  <li className="mb-3">
                    <i class="bi bi-check"></i>  Pooja Flowers</li>

                </ul>

              </Col>

              <Col md={6}>

                <ul className="list-unstyled">

                  <li className="mb-3">
                    <i class="bi bi-check"></i>  Elegant Bouquets</li>

                  <li className="mb-3">
                    <i class="bi bi-check"></i>  Floral Gifts</li>

                  <li className="mb-3">
                    <i class="bi bi-check"></i>  Wedding Flowers</li>

                  <li className="mb-3" >
                    <i class="bi bi-check"></i>  Seasonal Flowers</li>

                  <li className="mb-3"> <i class="bi bi-check"></i>  Event Decoration</li>

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
<br />
      <h5> Why Choose FLORENZA?</h5>
<br />
<p>🌸At FLORENZA, we believe that flowers bring happiness, love, and positivity
 to every occasion.
  Whether you're celebrating a special moment, expressing your feelings,
   or offering flowers for prayers, we help you find the perfect blooms. 
   Our commitment is to provide fresh, high-quality flowers that make every moment
    memorable.</p>
    </div>
  );
}

export default About;