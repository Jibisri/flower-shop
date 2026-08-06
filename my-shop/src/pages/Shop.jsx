import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Shop() {
  const occasions = [
    { title: "Birthday", icon: "bi-cake2-fill" },
    { title: "Valentine's Day", icon: "bi-heart-fill" },
    { title: "Congratulations", icon: "bi-check-circle-fill" },
    { title: "Get Well Soon", icon: "bi-heart-pulse-fill" },
    { title: "Wedding", icon: "bi-stars" },
    { title: "Temple", icon: "bi-flower1" },
  ];

  const categories = [
    { title: "Bouquets", icon: "bi-flower1" },
    { title: "Garlands", icon: "bi-gem" },
    { title: "Loose Flowers", icon: "bi-flower2" },
    { title: "Hair Flowers", icon: "bi-flower3" },
    { title: "Orchids", icon: "bi-flower1" },
    { title: "Pooja flowers", icon: "bi-gift-fill" },
  ];

  return (
    <Container className="py-5">
      {/* Shop By Occasion */}
      <h2
        className="mb-5"
        style={{
          color: "#342f35c7",
          fontFamily: "Georgia",
          fontWeight: "bold",
        }}
      >
        <i className="bi bi-arrow-right me-2"></i>
        Shop By Occasion
      </h2>

      <Row className="g-4 justify-content-center mb-5">
        {occasions.map((item, index) => (
          <Col
            key={index}
            lg={2}
            md={4}
            sm={6}
            xs={6}
            className="text-center"
          >
            <div
              className="category-circle"
              style={{
                width: "190px",
                height: "190px",
                border: "5px solid #7B1FA2",
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto",
                backgroundColor: "#FDF4FF",
                boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              <i
                className={`bi ${item.icon}`}
                style={{
                  fontSize: "55px",
                  color: "#7B1FA2",
                }}
              ></i>

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


{/* line */}
         <hr
           style={{
           height: "1px",
            backgroundColor: "purple",
            border: "none",
            opacity: 1,
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
            }}
           />


      {/* Shop By Category */}
      <h2
        className="mb-5 mt-5"
        style={{
          color: "#342f35c7",
          fontFamily: "Georgia",
          fontWeight: "bold",
        }}
      >
        <i className="bi bi-arrow-right me-2"></i>
        Shop By Category
      </h2>

      <Row className="g-4 justify-content-center">
        {categories.map((item, index) => (
          <Col
            key={index}
            lg={2}
            md={4}
            sm={6}
            xs={6}
            className="text-center"
          >
            <div
              className="category-circle"
              style={{
                width: "190px",
                height: "190px",
                border: "5px solid #7B1FA2",
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto",
                backgroundColor: "#FDF4FF",
                boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              <i
                className={`bi ${item.icon}`}
                style={{
                  fontSize: "55px",
                  color: "#7B1FA2",
                }}
              ></i>

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
      </Row> <br />


{/* line */}
            <hr
            style={{
             height: "1px",
             backgroundColor: "purple",
             border: "none",
             opacity: 1,
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
            }}
             />

    </Container>
  );
}

export default Shop;