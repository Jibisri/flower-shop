import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Category images
import bouquetImage from "../assets/red-2.webp";
import orchidImage from "../assets/orchid-home.jpg";
import poojaImage from "../assets/pooja-home.jpg";
import garlandImage from "../assets/garland-2.webp";
import looseFlowerImage from "../assets/petal-1.webp";

function Categories() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Bouquet",
      image: bouquetImage,
    },
    {
      name: "Orchid",
      image: orchidImage,
    },
    {
      name: "Pooja",
      image: poojaImage,
    },
    {
      name: "Garland",
      image: garlandImage,
    },
    {
      name: "Loose Flowers",
      image: looseFlowerImage,
    },
  ];

  const handleCategory = (category) => {
    navigate(`/shop?category=${category}`);
  };

  return (
    <Container className="my-5 category-container"> 

      {/* Heading */}
      <div className="text-center mb-4">
        <h2
          style={{
            color: "#2b5605c7",
            fontFamily: "Georgia",
            fontWeight: "bold",
          }}
        >
          <i className="bi bi-arrow-right"></i>{" "}
          Shop By Category
        </h2>

        <p style={{ color: "#555" }}>
          Explore our fresh flowers and beautiful arrangements
        </p>
      </div>

      {/* Categories */}
      <div className="category-row">

        {categories.map((item, index) => (
          <div
            key={index}
            className="category-item"
            onClick={() => handleCategory(item.name)}
          >

            {/* Image Circle */}
            <div className="category-circle">
              <img
                src={item.image}
                alt={item.name}
              />
            </div>

            {/* Category Name */}
            <h5>{item.name}</h5>

          </div>
        ))}

      </div>

    </Container>
  );
}

export default Categories;