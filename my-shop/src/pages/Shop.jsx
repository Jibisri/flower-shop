import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Shop() {
  const categories = [
    {
      title: "Birthday",
      icon: "bi-cake2-fill",
    },
    {
      title: "Anniversary",
      icon: "bi-heart-fill",
    },
    {
      title: "Wedding",
      icon: "bi-gem",
    },
    {
      title: "Pooja",
      icon: "bi-flower1",
    },
    {
      title: "Congratulations",
      icon: "bi-stars",
    },
    {
      title: "Flower Gifts",
      icon: "bi-gift-fill",
    },
  ];

  return (
    <Container className="py-5">

      <h1
        className="mb-5 text-center"
        style={{
          color: "#d81b60",
          fontSize: "4rem",
          fontFamily: "Georgia",
        }}
      >
        Shop By Categories
      </h1>

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
              style={{
                width: "200px",
                height: "200px",
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
                  fontSize: "60px",
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

    </Container>
  );
}

export default Shop;