import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row } from "react-bootstrap";
import logo from "../../images/overbrook.png";

// import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
// import UserPool from "../UserPool";

export default function LoginComp() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  //const navigate = useNavigate();

  function handleSubmit(event) {
    const URL = `https://smbd-test.auth.us-east-1.amazoncognito.com/login?client_id=6t7iieu7iapoadjqj20di1j33h&response_type=code&scope=email+openid+phone+profile&redirect_uri=http%3A%2F%2Flocalhost%3A3000`;
    window.location.href = URL;
  }

  return (
    <div className="Login">
      <Container>
        <Row>
          <img
            src={logo}
            alt="Overbrook School of the Blind Logo"
            style={{ width: "800px", height: "200px" }}
          />
        </Row>

        {/* <Form onSubmit={handleSubmit}>
          <Form.Group controlID="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlID="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              autoFocus
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            style={{ cursor: "pointer" }}
            variant="warning"
            onClick={() => navigate("/home")}
            type="submit"
          >
            Login
          </Button>
        </Form> */}
        <Button onClick={handleSubmit}>Login</Button>
      </Container>
    </div>
  );
}
