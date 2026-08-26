import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Bouquet",
      icon: "🌸",
    },
    {
      name: "Orchid",
      icon: "🌺",
    },
    {
      name: "Pooja",
      icon: "🌼",
    },
    {
      name: "Garland",
      icon: "🌹",
    },
    {
      name: "Loose Flowers",
      icon: "🌻",
    },
  ];

  // When user clicks a category
  const handleCategory = (category) => {
    navigate(`/shop?category=${category}`);
  };

  return (
    <Container className="my-5">

      {/* Heading */}
      <h2
        className="mb-5"
        style={{
          color: "#2b5605c7",
          fontFamily: "Georgia",
          fontWeight: "bold",
          marginLeft: "120px",
        }}
      >
        <i className="bi bi-arrow-right"></i>{" "}
        Shop By Category
      </h2>

      {/* Categories */}
      <Row className="g-4">

        {categories.map((item, index) => (

          <Col
            md={4}
            lg={3}
            key={index}
          >

            <Card
              className="text-center shadow border-0 h-100"
              style={{
                borderRadius: "15px",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onClick={() =>
                handleCategory(item.name)
              }
            >

              <Card.Body>

                {/* Category Icon */}
                <div
                  style={{
                    fontSize: "55px",
                    marginBottom: "15px",
                  }}
                >
                  {item.icon}
                </div>

                {/* Category Name */}
                <h5
                  style={{
                    color: "#7b1fa2",
                    fontFamily: "Georgia",
                    fontWeight: "bold",
                  }}
                >
                  {item.name}
                </h5>

              </Card.Body>

            </Card>

          </Col>

        ))}

      </Row>

    </Container>
  );
}

export default Categories;