import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Product images
import red2 from "../assets/red-2.webp";
import flower3 from "../assets/flower-3.jpg";
import pinkBouquet from "../assets/pink-boq.jpg";
import orchid1 from "../assets/orchid-blue.jpg";

function BestSeller() {
  const navigate = useNavigate();

  const products = [
    {
      name: "Red Roses Bouquet",
      image: red2,
    },
    {
      name: "Mixed Flower Basket",
      image: flower3,
    },
    {
      name: "Pink Bouquet",
      image: pinkBouquet,
    },
    {
      name: "Blue Orchid",
      image: orchid1,
    },
  ];

  const handleClick = (productName) => {
    navigate(`/shop?product=${encodeURIComponent(productName)}`);
  };

  return (
    <Container className="my-5">
      <div className="text-center mb-4">
        <h2
          style={{
            color: "#7B1FA2",
            fontFamily: "Georgia",
            fontWeight: "bold",
          }}
        >
          BEST SELLER
        </h2>

        <p className="text-muted">
          Our most loved flowers and arrangements
        </p>
      </div>

      <div className="best-seller-row">
        {products.map((product) => (
          <div
            key={product.name}
            className="best-seller-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="best-seller-image"
              onClick={() => handleClick(product.name)}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default BestSeller;