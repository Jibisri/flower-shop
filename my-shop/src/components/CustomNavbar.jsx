import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
  Offcanvas,
} from "react-bootstrap";

function CustomNavbar() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      className="shadow-sm py-3"
    >
      <Container>

        {/* Logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-2"
          style={{ color: "black", textDecoration: "none" }}
        >
          🌸 FLORENZA
        </Navbar.Brand>

        {/* Toggle */}
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          onClick={handleShow}
        />

        {/* Offcanvas */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          placement="end"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="fw-bold">
              🌸 FLORENZA
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="align-items-lg-center">

            {/* Navigation */}
            <Nav className="mx-auto nav-menu">

{/* home */}
              <Nav.Link
                as={Link}
                to="/"
                onClick={handleClose}
              >
                Home
              </Nav.Link>

{/* shop */}
              <Nav.Link
                as={Link}
                to="/shop"
                onClick={handleClose}
              >
                Shop
              </Nav.Link>

{/* categories */}
            <NavDropdown
               title="Categories"
                id="categories-dropdown"
               onClick={(e) => e.stopPropagation()}
            >
             <NavDropdown.Item
             as={Link}
             to="/categories/bouquets"
             onClick={handleClose}
              >
             💐 Bouquets
            </NavDropdown.Item>

             <NavDropdown.Item
             as={Link}
              to="/categories/loose-flowers"
             onClick={handleClose}
              >
           🌸 Loose Flowers
            </NavDropdown.Item>

             <NavDropdown.Item
            as={Link}
             to="/categories/garlands"
             onClick={handleClose}
             >
             🌺 Garlands
            </NavDropdown.Item>

            <NavDropdown.Item
              as={Link}
              to="/categories/pooja-flowers"
              onClick={handleClose}
             >
              🌼 Pooja Flowers
              </NavDropdown.Item>

               <NavDropdown.Item
               as={Link}
                to="/categories/gifts"
                onClick={handleClose}
                 >
               🎁 Gift Flowers
               </NavDropdown.Item>

              <NavDropdown.Divider />

               <NavDropdown.Item
                as={Link}
                to="/categories"
                onClick={handleClose}
                >
               View All
               </NavDropdown.Item>
               </NavDropdown>


{/* about */}
              <Nav.Link
                as={Link}
                to="/about"
                onClick={handleClose}
              >
                About
              </Nav.Link>

{/* contact */}
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={handleClose}
              >
                Contact
              </Nav.Link>

            </Nav>


{/* Right Side */}
            <div className="navbar-right">

              <Form className="search-box">

                <FormControl
                  type="search"
                  placeholder="Search flowers..."
                  className="search-input"
                />

                <Button className="search-btn">
                  <i className="bi bi-search"></i>
                </Button>

              </Form>


{/* icons */}
              <Nav className="icon-menu">

{/* wishlist icon */}
                <Nav.Link
                  as={Link}
                  to="/wishlist"
                  onClick={handleClose}
                >
                  <i className="bi bi-heart fs-5"></i>
                </Nav.Link>


{/* cart icon */}
                <Nav.Link
                  as={Link}
                  to="/cart"
                  onClick={handleClose}
                >
                  <i className="bi bi-cart4 fs-5"></i>
                </Nav.Link>


{/* login icon */}
                <Nav.Link
                  as={Link}
                  to="/login"
                  onClick={handleClose}
                >
                  <i className="bi bi-person fs-5"></i>
                </Nav.Link>

              </Nav>

            </div>

          </Offcanvas.Body>
        </Navbar.Offcanvas>

      </Container>
    </Navbar>
  );
}

export default CustomNavbar;