import React, { useRef } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

function Occasion() {
  const carouselRef = useRef(null);

  const occasions = [
    { title: "Birthday", icon: "bi-cake2-fill" },
    { title: "Valentine's Day", icon: "bi-heart-fill" },
    { title: "Congratulations", icon: "bi-check-circle-fill" },
    { title: "Get Well Soon", icon: "bi-heart-pulse-fill" },
    { title: "Wedding", icon: "bi-stars" },
    { title: "Temple", icon: "bi-flower1" },
  ];

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };

  return (
    <Container className="py-5">

      {/* Heading */}
      <h2
        className="mb-4"
        style={{
          color: "#2b5605c7",
          fontFamily: "Georgia",
          fontWeight: "bold",
        }}
      >
        <i className="bi bi-arrow-right"></i>{" "}
        Shop By Occasion
      </h2>

      {/* Occasion Carousel */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          gap: "0px",
        }}
      >

        {/* LEFT ARROW */}
        <button
          onClick={handlePrev}
          style={{
            border: "none",
            background: "transparent",
            color: "#7B1FA2",
            fontSize: "28px",
            fontWeight: "bold",
            cursor: "pointer",
            padding: "0 2px",
            margin: 0,
            zIndex: 10,
          }}
        >
          
<i class="bi bi-arrow-left-short"></i>

        </button>

        {/* CAROUSEL */}
        <div style={{ flex: "0 1 900px" ,
          margin: 0,
         }}>
          <Carousel
            ref={carouselRef}
            indicators={false}
            controls={false}
            interval={3000}
          >

            {/* FIRST SLIDE */}
            <Carousel.Item>
              <Row className="justify-content-center">

                {occasions.slice(0, 3).map((item, index) => (
                  <Col
                    xs={4}
                    md={4}
                    key={index}
                    className="px-1"
                  >
                    <div className="text-center p-2">

                      {/* Circle */}
                      <div
                        style={{
                          width: "clamp(75px, 18vw, 140px)",
                          height: "clamp(75px, 18vw, 140px)",
                          margin: "auto",
                          background: "#f8e9ff",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow:
                            "0 4px 10px rgba(0,0,0,0.15)",
                        }}
                      >
                        <i
                          className={`bi ${item.icon}`}
                          style={{
                            fontSize: "clamp(30px, 7vw, 60px)",
                            color: "#7B1FA2",
                          }}
                        ></i>
                      </div>

                      {/* Occasion Name */}
                      <h5
                        className="mt-3"
                        style={{
                          color: "#7B1FA2",
                          fontWeight: "600",
                          fontSize: "clamp(11px, 2.5vw, 18px)",
                        }}
                      >
                        {item.title}
                      </h5>

                    </div>
                  </Col>
                ))}

              </Row>
            </Carousel.Item>

            {/* SECOND SLIDE */}
            <Carousel.Item>
              <Row className="justify-content-center">

                {occasions.slice(3, 6).map((item, index) => (
                  <Col
                    xs={4}
                    md={4}
                    key={index}
                    className="px-1"
                  >
                    <div className="text-center p-2">

                      {/* Circle */}
                      <div
                        style={{
                          width: "clamp(75px, 18vw, 140px)",
                          height: "clamp(75px, 18vw, 140px)",
                          margin: "auto",
                          background: "#f8e9ff",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow:
                            "0 4px 10px rgba(0,0,0,0.15)",
                        }}
                      >
                        <i
                          className={`bi ${item.icon}`}
                          style={{
                            fontSize: "clamp(30px, 7vw, 60px)",
                            color: "#7B1FA2",
                          }}
                        ></i>
                      </div>

                      {/* Occasion Name */}
                      <h5
                        className="mt-3"
                        style={{
                          color: "#7B1FA2",
                          fontWeight: "600",
                          fontSize: "clamp(11px, 2.5vw, 18px)",
                        }}
                      >
                        {item.title}
                      </h5>

                    </div>
                  </Col>
                ))}

              </Row>
            </Carousel.Item>

          </Carousel>
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={handleNext}
          style={{
            border: "none",
            background: "transparent",
            color: "#7B1FA2",
            fontSize: "35px",
            fontWeight: "bold",
            cursor: "pointer",
            padding: "0 10px",
            zIndex: 10,
          }}
        >
          →
        </button>

      </div>
    </Container>
  );
}

export default Occasion;