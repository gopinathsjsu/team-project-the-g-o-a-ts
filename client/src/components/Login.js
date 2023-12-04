import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./login.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import apiClient from "../api-client/apiClient";
import { CanceledError } from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { jwtDecode } from "jwt-decode";
import { fetchUserById } from "../common/apiUtils";

const Login = () => {
  const { login } = useAuth();
  /* Sending requests to protected routes */
  //   const fetchProtectedData = async () => {
  //     const response = await fetch('/protected', {
  //         headers: {
  //             'Authorization': `Bearer ${localStorage.getItem('token')}`
  //         }
  //     });
  //     // ...
  // };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const submitUser = async (e) => {
    e.preventDefault();
    let loggedIn = false;
    await apiClient
      .post("/users/login", {
        email: e.target[0].value,
        password: e.target[1].value,
      })
      .then(async (res) => {
        const token = res.data.accessToken;
        if (token) {
          localStorage.setItem("token", token);
          loggedIn = true;
          const decoded = jwtDecode(token);
          const userId = decoded.id;
          const userData = await fetchUserById(userId);
          login(token, userData);
        }
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        console.log(err.message);
        alert("Failed to login to user, check your information!");
      });

    if (loggedIn) {
      console.log("Logged in User");
      setShowSuccess(true);
      await sleep(1750);
      navigate("/");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h4 id="login-title">Sign In</h4>
        <Form onSubmit={submitUser}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>

          {showSuccess ? (
            <Button variant="success" disabled>
              Logged In!
            </Button>
          ) : (
            <Button variant="primary" type="submit">
              Login
            </Button>
          )}
        </Form>

        <Link to="/signup" className="signup-link">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
