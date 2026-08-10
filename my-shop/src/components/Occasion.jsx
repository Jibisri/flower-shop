import React from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Col, Carousel } from "react-bootstrap";

function Occasion() {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const occasions = [
    { title: "Birthday", icon: "bi-cake2-fill" },
    { title: "Valentine's Day", icon: "bi-heart-fill" },
    { title: "Congratulations", icon: "bi-check-circle-fill" },
    { title: "Get Well Soon", icon: "bi-heart-pulse-fill" },
    { title: "Wedding", icon: "bi-stars" },
    { title: "Temple", icon: "bi-flower1" },
  ];

  return (
    <Container className="py-5">
      <h2
        className="mb-5"
        style={{
          color: "#2b5605c7",
          fontFamily: "Georgia",
          fontWeight: "bold",

        }}
      ><i class="bi bi-arrow-right"></i>
         Shop By Occasion
      </h2>

      <Carousel indicators={false} interval={3000}>
        {[0, 3].map((startIndex) => (
          <Carousel.Item key={startIndex}>
            <Row className="justify-content-center">
              {occasions
                .slice(startIndex, startIndex + 3)
                .map((item, index) => (
                  <Col md={4} key={index}>
                    <div className="text-center p-4">
                      <div
                        style={{
                          width: "140px",
                          height: "140px",
                          margin: "auto",
                          background: "#f8e9ff",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                        }}
                      >
                        <i
                          className={`bi ${item.icon}`}
                          style={{
                            fontSize: "60px",
                            color: "#7B1FA2",
                          }}
                        ></i>
                      </div>

                      <h5
                        className="mt-3"
                        style={{
                          color: "#7B1FA2",
                          fontWeight: "600",
                        }}
                      >
                        {item.title}
                      </h5>
                    </div>
                  </Col>
                ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>

    </Container>
  );
}

export default Occasion;