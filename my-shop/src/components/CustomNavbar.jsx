import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const savedUser = localStorage.getItem("user");
const user = savedUser ? JSON.parse(savedUser) : null;

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim() !== "") {
      navigate(`/shop?search=${search}`);
      handleClose();
    }
  };

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

              {/* Home */}
              <Nav.Link
                as={Link}
                to="/"
                onClick={handleClose}
              >
                Home
              </Nav.Link>

              {/* Shop */}
              <Nav.Link
                as={Link}
                to="/shop"
                onClick={handleClose}
              >
                Shop
              </Nav.Link>

              {/* Categories */}
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
                  <i className="bi bi-dot"></i>
                  Bouquets
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/categories/loose-flowers"
                  onClick={handleClose}
                >
                  <i className="bi bi-dot"></i>
                  Loose Flowers
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/categories/garlands"
                  onClick={handleClose}
                >
                  <i className="bi bi-dot"></i>
                  Garlands
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/categories/pooja-flowers"
                  onClick={handleClose}
                >
                  <i className="bi bi-dot"></i>
                  Pooja Flowers
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/categories/gifts"
                  onClick={handleClose}
                >
                  <i className="bi bi-dot"></i>
                  Gift Flowers
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item
                  as={Link}
                  to="/shop"
                  onClick={handleClose}
                >
                  View All
                </NavDropdown.Item>
              </NavDropdown>

              {/* Occasions */}
              <NavDropdown
                title="Occasions"
                id="occasions-dropdown"
                onClick={(e) => e.stopPropagation()}
              >
                <NavDropdown.Item
                  as={Link}
                  to="/shop"
                  onClick={handleClose}
                >
                  <i className="bi bi-dot"></i> Birthday
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/shop"
                  onClick={handleClose}
                >
                  <i className="bi bi-dot"></i> Anniversary
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/shop"
                  onClick={handleClose}
                >
                  <i className="bi bi-dot"></i> Wedding
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/shop"
                  onClick={handleClose}
                >
                  <i className="bi bi-dot"></i> Pooja
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/shop"
                  onClick={handleClose}
                >
                  <i className="bi bi-dot"></i> Congratulations
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/shop"
                  onClick={handleClose}
                >
                  <i className="bi bi-dot"></i> Get Well Soon
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item
                  as={Link}
                  to="/shop"
                  onClick={handleClose}
                >
                  View All
                </NavDropdown.Item>
              </NavDropdown>

              {/* About */}
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

              {/* Search */}
              <Form
                className="search-box"
                onSubmit={handleSearch}
              >
                <FormControl
                  type="search"
                  placeholder="Search flowers..."
                  className="search-input"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <Button
                  type="submit"
                  className="search-btn"
                >
                  <i className="bi bi-search"></i>
                </Button>
              </Form>

              {/* Icons */}
              <Nav className="icon-menu">

                {/* Wishlist */}
                <Nav.Link
                  as={Link}
                  to="/wishlist"
                  onClick={handleClose}
                  title="Wishlist"
                >
                  <i className="bi bi-heart fs-5"></i>
                </Nav.Link>

                {/* Cart */}
                <Nav.Link
                  as={Link}
                  to="/cart"
                  onClick={handleClose}
                  title="Cart"
                >
                  <i className="bi bi-cart4 fs-5"></i>
                </Nav.Link>

                {/* My Orders - NEW */}
                <Nav.Link
                  as={Link}
                  to="/my-orders"
                  onClick={handleClose}
                  title="My Orders"
                >
                  <i className="bi bi-box-seam fs-5"></i>
                </Nav.Link>

                {/* Admin Dashboard */}
          {user?.role === "admin" && (
           <Nav.Link
            as={Link}
            to="/admin"
              onClick={handleClose}
             title="Admin Dashboard"
            >
              <i className="bi bi-speedometer2 fs-5"></i>
            </Nav.Link>
             )}

                {/* Login */}
                <Nav.Link
                  as={Link}
                  to="/login"
                  onClick={handleClose}
                  title="Login"
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