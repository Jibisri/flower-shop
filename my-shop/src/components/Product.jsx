import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import flower1 from "../assets/flower-1.png";
import flower2 from "../assets/flower-2.png";
import flower3 from "../assets/flower-3.jpg";

function Product({ search }) {
  const products = [
    {
      id: 1,
      name: "Purple Orchid Bouquet",
      image: flower1,
      price: "₹699",
    },
    {
      id: 2,
      name: "Rose Bouquet",
      image: flower2,
      price: "₹599",
    },
    {
      id: 3,
      name: "Mixed Flower Basket",
      image: flower3,
      price: "₹899",
    },
  ];

  const filteredProducts =
  !search || search.trim() === ""
    ? products
    : products.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
  
  
      return (
  <Container className="py-5">
    <h2
      className="text-center mb-5"
      style={{
        color: "#7B1FA2",
        fontWeight: "bold",
        fontFamily: "Georgia",
      }}
    >
      Our Products
    </h2>

    <Row>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((item) => (
          <Col md={4} className="mb-4" key={item.id}>
            <Card
              className="shadow border-0 h-100"
              style={{ borderRadius: "15px" }}
            >
              <Card.Img
                variant="top"
                src={item.image}
                style={{
                  height: "260px",
                  objectFit: "cover",
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              />

              <Card.Body className="text-center">
                <Card.Title>{item.name}</Card.Title>

                <h5 className="text-success">{item.price}</h5>

                <Button variant="outline-dark">
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <Col>
          <h4 className="text-center text-danger">
            No products found
          </h4>
        </Col>
      )}
    </Row>
  </Container>
);
}

export default Product;