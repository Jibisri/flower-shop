import { useState } from "react";
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

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  // =========================
  // EMAIL VALIDATION
  // =========================
  const validateEmail = (email) => {
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/;
    return regex.test(email);
  };

  // =========================
  // REGISTER
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setSuccess(false);

    // Name validation
    if (name.trim() === "") {
      setMessage("Name is required.");
      return;
    }

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

    // Password length
    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    // Confirm password
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    // =========================
    // SEND TO BACKEND
    // =========================
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          password: password,
        }
      );

      console.log("Register response:", response.data);

      setSuccess(true);
      setMessage("Registration successful! 🌸");

      // Clear form
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      // Go to Login
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      console.error("Register error:", error);

      setSuccess(false);

      if (error.response) {
        setMessage(
          error.response.data.message || "Registration failed."
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
                  <i className="bi bi-person-plus"></i>{" "}
                  Register
                </h2>

                <p className="text-muted">
                  Create your Florenza account 🌸
                </p>
              </div>

              {/* Message */}
              {message && (
                <Alert variant={success ? "success" : "danger"}>
                  {message}
                </Alert>
              )}

              {/* Form */}
              <Form onSubmit={handleSubmit}>

                {/* Name */}
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>

                  <InputGroup>
                    <InputGroup.Text>
                      <i className="bi bi-person-fill"></i>
                    </InputGroup.Text>

                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) =>
                        setName(e.target.value)
                      }
                    />
                  </InputGroup>
                </Form.Group>

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
                        setEmail(
                          e.target.value.toLowerCase()
                        )
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

                {/* Confirm Password */}
                <Form.Group className="mb-4">
                  <Form.Label>
                    Confirm Password
                  </Form.Label>

                  <InputGroup>
                    <InputGroup.Text>
                      <i className="bi bi-lock-fill"></i>
                    </InputGroup.Text>

                    <Form.Control
                      type="password"
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) =>
                        setConfirmPassword(e.target.value)
                      }
                    />
                  </InputGroup>
                </Form.Group>

                {/* Register Button */}
                <Button
                  type="submit"
                  className="w-100"
                  style={{
                    backgroundColor: "purple",
                    border: "none",
                  }}
                >
                  Register
                </Button>

                {/* Login */}
                <div className="text-center mt-4">
                  <p>
                    Already have an account?{" "}

                    <Link
                      to="/login"
                      className="text-decoration-none fw-bold"
                      style={{
                        color: "purple",
                      }}
                    >
                      Login
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

export default Register;