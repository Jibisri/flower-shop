import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-success text-white text-center py-3 mt-5">
      <Container>
        <h5>🌸 Flower Shop</h5>

        <p className="mb-1">
          Fresh Flowers • Bouquets • Gifts
        </p>

        <p className="mb-0">
          © 2026 Flower Shop. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;