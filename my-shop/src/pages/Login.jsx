import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
  Alert,
} from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  // Load remembered email
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberEmail");

    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  // Email validation
  const validateEmail = (email) => {
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/;
    return regex.test(email);
  };

  // Login
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setSuccess(false);
      setMessage(
        "Enter a valid email (lowercase only, must contain @ and .com)."
      );
      return;
    }

    if (password.trim() === "") {
      setSuccess(false);
      setMessage("Password is required.");
      return;
    }

    // Remember email
    if (rememberMe) {
      localStorage.setItem("rememberEmail", email);
    } else {
      localStorage.removeItem("rememberEmail");
    }

    setSuccess(true);
    setMessage(" Welcome to Florenza!");

    // Clear password only
    setPassword("");
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "#f8f2ff",
      }}
    >
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={4}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Body className="p-5">

              <div className="text-center mb-4">
                <h2 style={{ color: "purple",
                fontWeight:300
                 }}>
                 <i class="bi bi-person"></i> Login 
                </h2>

                <p className="text-muted">
                  Login to continue shopping fresh flowers.
                </p>
              </div>

              {message && (
                <Alert variant={success ? "success" : "danger"}>
                  {message}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>

                {/* Email */}
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>

                  <InputGroup>
                    <InputGroup.Text>
                      <i className="bi bi-envelope-fill"></i>
                    </InputGroup.Text>

                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value.toLowerCase())
                      }
                    />
                  </InputGroup>
                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>

                  <InputGroup>
                    <InputGroup.Text>
                      <i className="bi bi-lock-fill"></i>
                    </InputGroup.Text>

                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                    />
                  </InputGroup>
                </Form.Group>

                {/* Remember Me */}
                <div className="d-flex justify-content-between align-items-center mb-4">

                  <Form.Check
                    type="checkbox"
                    label="Remember Me"
                    checked={rememberMe}
                    onChange={(e) =>
                      setRememberMe(e.target.checked)
                    }
                  />

                  <Link
                    to="/forgot-password"
                    className="text-decoration-none"
                    style={{ color: "purple" }}
                  >
                    Forgot Password?
                  </Link>

                </div>

                {/* Login Button */}
                <Button
                  type="submit"
                  className="w-100"
                  style={{
                    backgroundColor: "purple",
                    border: "none",
                  }}
                >
                  Login
                </Button>

                {/* Register */}
                <div className="text-center mt-4">
                  <p>
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="text-decoration-none fw-bold"
                      style={{ color: "purple" }}
                    >
                      Register
                    </Link>
                  </p>
                </div>

              </Form>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;