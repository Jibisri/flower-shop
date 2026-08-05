import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className=" text-white text-center py-3 mt-5 " style={{background:"purple"}}>
      <Container>
        <h5>🌸 FLORENZA</h5>

        <p className="mb-1">
           Flowers for Celebration....<i class="bi bi-heart"></i>
        </p>

        <p className="mb-0">
          © 2026 FLORENZA. Making Every Movements Bloom.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;