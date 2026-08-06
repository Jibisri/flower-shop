import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer
      className="footer text-white text-center py-3 mt-5"
      style={{ background: "purple" }}
    >
      <Container>
        <h5>🌸 FLORENZA</h5>

        <p className="mb-1">
          Flowers for Celebration.... <i className="bi bi-heart"></i>
        </p>

        <p className="mb-0">
          © 2026 FLORENZA. Making Every Moments Bloom.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;