import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  // =========================
  // LOAD REMEMBERED EMAIL
  // =========================
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberEmail");

    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  // =========================
  // EMAIL VALIDATION
  // =========================
  const validateEmail = (email) => {
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/;
    return regex.test(email);
  };

  // =========================
  // LOGIN
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setSuccess(false);

    // Email validation
    if (!validateEmail(email)) {
      setMessage(
        "Enter a valid email (lowercase only, must contain @ and .com)."
      );
      return;
    }

    // Password validation
    if (password.trim() === "") {
      setMessage("Password is required.");
      return;
    }

    // =========================
    // REMEMBER EMAIL
    // =========================
    if (rememberMe) {
      localStorage.setItem("rememberEmail", email);
    } else {
      localStorage.removeItem("rememberEmail");
    }

    // =========================
    // SEND LOGIN TO BACKEND
    // =========================
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email: email.trim().toLowerCase(),
          password: password,
        }
      );

      console.log("Login response:", response.data);

      // =========================
      // LOGIN SUCCESS
      // =========================
      setSuccess(true);
      setMessage("Welcome to Florenza! 🌸");

      // Save JWT token if backend sends one
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      // Clear password
      setPassword("");

      // Go to Home page
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Login error:", error);

      setSuccess(false);

      if (error.response) {
        setMessage(
          error.response.data.message || "Login failed."
        );
      } else {
        setMessage(
          "Cannot connect to backend. Please check the server."
        );
      }
    }
  };

  // =========================
  // UI
  // =========================
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

              {/* Heading */}
              <div className="text-center mb-4">
                <h2
                  style={{
                    color: "purple",
                    fontWeight: 300,
                  }}
                >
                  <i className="bi bi-person"></i>{" "}
                  Login
                </h2>

                <p className="text-muted">
                  Login to continue shopping fresh flowers.
                </p>
              </div>

              {/* Message */}
              {message && (
                <Alert variant={success ? "success" : "danger"}>
                  {message}
                </Alert>
              )}

              {/* Login Form */}
              <Form onSubmit={handleSubmit}>

                {/* Email */}
                <Form.Group className="mb-3">
                  <Form.Label>
                    Email Address
                  </Form.Label>

                  <InputGroup>
                    <InputGroup.Text>
                      <i className="bi bi-envelope-fill"></i>
                    </InputGroup.Text>

                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) =>
                        setEmail(
                          e.target.value.toLowerCase()
                        )
                      }
                    />
                  </InputGroup>
                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-3">
                  <Form.Label>
                    Password
                  </Form.Label>

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

                {/* Remember Me + Forgot Password */}
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
                    style={{
                      color: "purple",
                    }}
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
                      style={{
                        color: "purple",
                      }}
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