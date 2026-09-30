import React, { useRef } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Occasion() {
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const occasions = [
    { title: "Birthday", icon: "bi-cake2-fill" },
    { title: "Valentine's Day", icon: "bi-heart-fill" },
    { title: "Congratulations", icon: "bi-check-circle-fill" },
    { title: "Get Well Soon", icon: "bi-heart-pulse-fill" },
    { title: "Wedding", icon: "bi-stars" },

    { title: "Temple", icon: "bi-flower1" },
    { title: "Anniversary", icon: "bi-gift-fill" },
    { title: "Housewarming", icon: "bi-house-fill" },
    
  ];

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };

  const handleOccasionClick = (occasion) => {
    navigate(
      `/shop?occasion=${encodeURIComponent(occasion)}`
    );
  };

  const renderOccasions = (items) => {
    return (
      <Row className="occasion-row justify-content-center">
        {items.map((item, index) => (
          <Col
            key={index}
            xs={3}
            className="occasion-col"
            onClick={() => handleOccasionClick(item.title)}
          >
            <div className="occasion-circle">
              <i className={`bi ${item.icon}`}></i>
            </div>

            <h5 className="occasion-title">
              {item.title}
            </h5>
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <section className="occasion-section">

      {/* Heading */}
      <Container fluid>

        <div className="text-center mb-4">
          <h2 className="occasion-heading">
            <i className="bi bi-arrow-right"></i>{" "}
            Shop By Occasion
          </h2>

          <p className="occasion-subtitle">
            Find the perfect flowers for every special moment.
          </p>
        </div>

        {/* Carousel + Arrows */}
        <div className="occasion-carousel-wrapper">

          {/* LEFT ARROW */}
          <button
            type="button"
            className="occasion-arrow"
            onClick={handlePrev}
            aria-label="Previous occasions"
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          {/* CAROUSEL */}
          <div className="occasion-carousel-container">

            <Carousel
              ref={carouselRef}
              indicators={false}
              controls={false}
              interval={3000}
              pause="hover"
            >

              {/* FIRST SLIDE */}
              <Carousel.Item>
                {renderOccasions(occasions.slice(0, 4))}
              </Carousel.Item>

              {/* SECOND SLIDE */}
              <Carousel.Item>
                {renderOccasions(occasions.slice(4, 8))}
              </Carousel.Item>

            </Carousel>

          </div>

          {/* RIGHT ARROW */}
          <button
            type="button"
            className="occasion-arrow"
            onClick={handleNext}
            aria-label="Next occasions"
          >
            <i className="bi bi-chevron-right"></i>
          </button>

        </div>

      </Container>
    </section>
  );
}

export default Occasion;