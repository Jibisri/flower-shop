import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { Flower1 } from "react-bootstrap-icons";

function CustomNavbar() {
  return (
    <>
      {/* Main Navbar */}
      <Navbar bg="white" expand="lg" className="py-4 shadow-sm">
        <Container fluid>

          {/* Logo */}
         <Navbar.Brand href="/" className="d-flex align-items-center">
            <Flower1 size={35} color="purple" />
            <span className="ms-2 fw-bold fs-4 text-dark">
            FlorenZaa...<i class="bi bi-balloon-heart-fill text-danger"></i> 
           </span>
          </Navbar.Brand>

          {/* Search */}
          <Form className="d-flex mx-auto search-box ps-4 pe-4">
            <FormControl
              type="search"
              placeholder="Search flowers..."
              className="search-input"
            />

            <Button className="search-btn">
              <i className="bi bi-search"></i>
            </Button>
          </Form>

          {/* Icons */}
          <div className="d-flex align-items-center">

            <Link to="/login" className="icon-link mx-2">
              <i className="bi bi-person"></i>
            </Link>

            <Link to="/wishlist" className="icon-link mx-2">
              <i className="bi bi-heart"></i>
            </Link>

            <Link to="/cart" className="icon-link mx-2">
           <i class="bi bi-cart4"></i>
              <span className="ms-2">  (0)</span>
            </Link>


          </div>

        </Container>
      </Navbar>

      {/* Menu */}
      <Navbar bg="white" expand="lg" className="border-top">
        <Container>

          <Nav className="mx-auto menu">

            <Nav.Link as={Link} to="/">HOME</Nav.Link>

            <Nav.Link as={Link} to="/shop">
              FLOWERS
            </Nav.Link>

            <Nav.Link href="#">
              FLOWER DELIVERY
            </Nav.Link>

            <Nav.Link href="#">
              SPECIAL OCCASION
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              CONTACT
            </Nav.Link>

          </Nav>

        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;