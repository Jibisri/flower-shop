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
    { title: "Anniversary", icon: "bi-gift-fill" },
    { title: "Housewarming", icon: "bi-house-fill" },
    {title: "father's Day", icon: "bi-person-fill" },
    { title: "Mother's Day", icon: "bi-person-heart" }, 

  ];

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };

  return (
    <section
      style={{
        backgroundColor: "#faf7ff",
        padding: "45px 0",
        marginTop: "30px",
      }}
    >
      <Container fluid>

        {/* Heading */}
        <div className="text-center mb-4">

          <h2
            style={{
              color: "#2b5605c7",
              fontFamily: "Georgia",
              fontWeight: "bold",
              fontSize: "clamp(24px, 4vw, 34px)",
            }}
          >
           <i className="bi bi-arrow-right"></i>{" "}
            Shop By Occasion
          </h2>

          <p
            style={{
              color: "#666",
              fontSize: "clamp(14px, 2vw, 17px)",
            }}
          >
            Find the perfect flowers for every special moment.
          </p>

        </div>

        {/* Carousel area */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >

          {/* LEFT ARROW */}
          <button
            onClick={handlePrev}
            style={{
              border: "none",
              background: "white",
              color: "#7B1FA2",
              width: "42px",
              height: "42px",
              minWidth: "42px",
              borderRadius: "50%",
              fontSize: "25px",
              cursor: "pointer",
              boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
              zIndex: 5,
            }}
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          {/* CAROUSEL */}
          <div
            style={{
              flex: 1,
              margin: "0 8px",
            }}
          >
            <Carousel
              ref={carouselRef}
              indicators={false}
              controls={false}
              interval={3000}
            >

            {/* FIRST SLIDE - 5 ITEMS */}
<Carousel.Item>
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    }}
  >
    {occasions.slice(0, 5).map((item, index) => (
      <div
        key={index}
        style={{
          flex: "0 0 20%",
          maxWidth: "20%",
          textAlign: "center",
          padding: "8px",
        }}
        className="occasion-item"
      >
        {/* Circle */}
        <div
          style={{
            width: "clamp(80px, 13vw, 140px)",
            height: "clamp(80px, 13vw, 140px)",
            margin: "auto",
            backgroundColor: "#f8e9ff",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
          }}
        >
          <i
            className={`bi ${item.icon}`}
            style={{
              fontSize: "clamp(30px, 5vw, 55px)",
              color: "#7B1FA2",
            }}
          ></i>
        </div>

        {/* Name */}
        <h5
          className="mt-3"
          style={{
            color: "#7B1FA2",
            fontWeight: "600",
            fontSize: "clamp(11px, 1.5vw, 17px)",
          }}
        >
          {item.title}
        </h5>
      </div>
    ))}
  </div>
</Carousel.Item>


{/* SECOND SLIDE - 5 ITEMS */}
<Carousel.Item>
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    }}
  >
    {occasions.slice(5, 10).map((item, index) => (
      <div
        key={index}
        style={{
          flex: "0 0 20%",
          maxWidth: "20%",
          textAlign: "center",
          padding: "8px",
        }}
        className="occasion-item"
      >
        {/* Circle */}
        <div
          style={{
            width: "clamp(80px, 13vw, 140px)",
            height: "clamp(80px, 13vw, 140px)",
            margin: "auto",
            backgroundColor: "#f8e9ff",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
          }}
        >
          <i
            className={`bi ${item.icon}`}
            style={{
              fontSize: "clamp(30px, 5vw, 55px)",
              color: "#7B1FA2",
            }}
          ></i>
        </div>

        {/* Name */}
        <h5
          className="mt-3"
          style={{
            color: "#7B1FA2",
            fontWeight: "600",
            fontSize: "clamp(11px, 1.5vw, 17px)",
          }}
        >
          {item.title}
        </h5>
      </div>
    ))}
  </div>
</Carousel.Item>

            </Carousel>
          </div>


          {/* RIGHT ARROW */}
          <button
            onClick={handleNext}
            style={{
              border: "none",
              background: "white",
              color: "#7B1FA2",
              width: "42px",
              height: "42px",
              minWidth: "42px",
              borderRadius: "50%",
              fontSize: "25px",
              cursor: "pointer",
              boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
              zIndex: 5,
            }}
          >
            <i className="bi bi-chevron-right"></i>
          </button>

        </div>

      </Container>
    </section>
  );
}

export default Occasion;