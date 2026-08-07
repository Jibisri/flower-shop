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
      <Container fluid className="px-3">

        {/* Logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-2 me-4"
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
             to="/shop/bouquets"
             onClick={handleClose}
              >
                <i class="bi bi-dot"></i>
              Bouquets
            </NavDropdown.Item>

             <NavDropdown.Item
             as={Link}
              to="/shop/loose-flowers"
             onClick={handleClose}
              >
                <i class="bi bi-dot"></i>
           Loose Flowers
            </NavDropdown.Item>

             <NavDropdown.Item
            as={Link}
             to="/shop/garlands"
             onClick={handleClose}
             >
              <i class="bi bi-dot"></i>
              Garlands
            </NavDropdown.Item>

            <NavDropdown.Item
              as={Link}
              to="/shop/pooja-flowers"
              onClick={handleClose}
             >
              <i class="bi bi-dot"></i>
               Pooja Flowers
              </NavDropdown.Item>

               <NavDropdown.Item
               as={Link}
                to="/shop/gifts"
                onClick={handleClose}
                 >
                  <i class="bi bi-dot"></i>
                Gift Flowers
               </NavDropdown.Item>

              <NavDropdown.Divider />

               <NavDropdown.Item
                as={Link}
                to="/s
      <Row>
        {categories.map((item, index) => (
          <Col md={3} key={index}>
            <Carhop"
                onClick={handleClose}
                >
               View All
               </NavDropdown.Item>
               </NavDropdown>


{/* occasion */}
             <NavDropdown
  title="Occasions"
  id="occasions-dropdown"
  onClick={(e) => e.stopPropagation()}
>
  <NavDropdown.Item as={Link} to="/shop" onClick={handleClose}>
    <i className="bi bi-dot"></i> Birthday
  </NavDropdown.Item>

  <NavDropdown.Item as={Link} to="/shop" onClick={handleClose}>
    <i className="bi bi-dot"></i> Anniversary
  </NavDropdown.Item>

  <NavDropdown.Item as={Link} to="/shop" onClick={handleClose}>
    <i className="bi bi-dot"></i> Wedding
  </NavDropdown.Item>

  <NavDropdown.Item as={Link} to="/shop" onClick={handleClose}>
    <i className="bi bi-dot"></i> Pooja
  </NavDropdown.Item>

  <NavDropdown.Item as={Link} to="/shop" onClick={handleClose}>
    <i className="bi bi-dot"></i> Congratulations
  </NavDropdown.Item>categories

  <NavDropdown.Item as={Link} to="/shop" onClick={handleClose}>
    <i className="bi bi-dot"></i> Get Well Soon
  </NavDropdown.Item>

  <NavDropdown.Divider />

  <NavDropdown.Item as={Link} to="/shop" onClick={handleClose}>
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