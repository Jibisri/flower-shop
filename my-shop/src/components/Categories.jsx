import { Card, Col, Container, Row } from "react-bootstrap";

function Categories() {
  const categories = [
    "Roses",
    "Tulips",
    "Lilies",
    "Orchids",
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Shop by Category</h2>

      <Row>
        {categories.map((item, index) => (
          <Col md={3} key={index}>
            <Card className="text-center shadow-sm">
              <Card.Body>
                <h5>{item}</h5>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Categories;