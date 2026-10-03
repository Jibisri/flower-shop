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

  // User
  const getUser = () => {
    try {
      const savedUser = localStorage.getItem("user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      return null;
    }
  };

  const [user, setUser] = useState(getUser());

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  // Offcanvas
  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  // Search
  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim() !== "") {
      navigate(`/shop?search=${encodeURIComponent(search.trim())}`);
      handleClose();
    }
  };

  return (
    <>
      {/* Top Navbar */}
      <Navbar
        bg="light"
        expand="lg"
        fixed="top"
        className="shadow-sm py-3"
      >
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            className="fw-bold fs-2"
            style={{
              color: "black",
              textDecoration: "none",
            }}
          >
            🌸 FLORENZA
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={handleShow}
          />

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
                    onClick={() => {
                      navigate("/shop?category=Bouquets");
                      handleClose();
                    }}
                  >
                    <i className="bi bi-dot"></i> Bouquets
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    onClick={() => {
                      navigate("/shop?category=Loose%20Flowers");
                      handleClose();
                    }}
                  >
                    <i className="bi bi-dot"></i> Loose Flowers
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    onClick={() => {
                      navigate("/shop?category=Garlands");
                      handleClose();
                    }}
                  >
                    <i className="bi bi-dot"></i> Garlands
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    onClick={() => {
                      navigate("/shop?category=Pooja%20Flowers");
                      handleClose();
                    }}
                  >
                    <i className="bi bi-dot"></i> Pooja Flowers
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <NavDropdown.Item
                    onClick={() => {
                      navigate("/shop");
                      handleClose();
                    }}
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
                    onClick={() => {
                      navigate("/shop?occasion=Birthday");
                      handleClose();
                    }}
                  >
                    <i className="bi bi-dot"></i> Birthday
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    onClick={() => {
                      navigate("/shop?occasion=Valentine%27s%20Day");
                      handleClose();
                    }}
                  >
                    <i className="bi bi-dot"></i> Valentine's Day
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    onClick={() => {
                      navigate("/shop?occasion=Congratulations");
                      handleClose();
                    }}
                  >
                    <i className="bi bi-dot"></i> Congratulations
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    onClick={() => {
                      navigate("/shop?occasion=Get%20Well%20Soon");
                      handleClose();
                    }}
                  >
                    <i className="bi bi-dot"></i> Get Well Soon
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    onClick={() => {
                      navigate("/shop?occasion=Wedding");
                      handleClose();
                    }}
                  >
                    <i className="bi bi-dot"></i> Wedding
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    onClick={() => {
                      navigate("/shop?occasion=Temple");
                      handleClose();
                    }}
                  >
                    <i className="bi bi-dot"></i> Temple
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    onClick={() => {
                      navigate("/shop?occasion=Anniversary");
                      handleClose();
                    }}
                  >
                    <i className="bi bi-dot"></i> Anniversary
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    onClick={() => {
                      navigate("/shop?occasion=Housewarming");
                      handleClose();
                    }}
                  >
                    <i className="bi bi-dot"></i> Housewarming
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <NavDropdown.Item
                    onClick={() => {
                      navigate("/shop");
                      handleClose();
                    }}
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

              {/* Search */}
              <div className="navbar-right">
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
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* Mobile Bottom Navigation */}
      <Navbar
        bg="white"
        className="fixed-bottom border-top shadow-sm"
      >
        <Container fluid className="p-0">
          <Nav className="w-100 justify-content-around text-center">

            {/* Account */}
            <Nav.Link
              as={Link}
              to="/login"
              className="bottom-nav-link"
            >
              <i className="bi bi-person-fill fs-5 d-block"></i>
              <small>Account</small>
            </Nav.Link>

            {/* Logout */}
            {user && (
              <Nav.Link
                onClick={handleLogout}
                className="bottom-nav-link"
              >
                <i className="bi bi-box-arrow-right fs-5 d-block"></i>
                <small>Logout</small>
              </Nav.Link>
            )}

            {/* Wishlist */}
            <Nav.Link
              as={Link}
              to="/wishlist"
              className="bottom-nav-link"
            >
              <i className="bi bi-heart-fill fs-5 d-block"></i>
              <small>Wishlist</small>
            </Nav.Link>

            {/* Cart */}
            <Nav.Link
              as={Link}
              to="/cart"
              className="bottom-nav-link"
            >
              <i className="bi bi-cart-fill fs-5 d-block"></i>
              <small>Cart</small>
            </Nav.Link>

            {/* My Orders */}
            <Nav.Link
              as={Link}
              to="/my-orders"
              className="bottom-nav-link"
            >
              <i className="bi bi-box-seam-fill fs-5 d-block"></i>
              <small>My Orders</small>
            </Nav.Link>

            {/* Admin Dashboard */}
            {user?.role === "admin" && (
              <Nav.Link
                as={Link}
                to="/admin"
                className="bottom-nav-link"
              >
                <i className="bi bi-speedometer2 fs-5 d-block"></i>
                <small>Admin Dashboard</small>
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;