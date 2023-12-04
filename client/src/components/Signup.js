import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import apiClient from "../api-client/apiClient";
import { CanceledError } from "axios";
import { useNavigate } from "react-router-dom";
import Toast from "react-bootstrap/Toast";
import Spinner from "react-bootstrap/Spinner";

const Signup = () => {
  // const controller = new AbortController();

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();
  const submitUser = async (e) => {
    e.preventDefault();
    await apiClient
      .post("/users/register", {
        // signal: controller.signal,
        name: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value,
        role: "Member",
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        console.log(err.message);
        alert("Failed to create user, check if you already have an account!");
      });
    console.log("Added User");
    setShowSuccess(true);
    await sleep(1750);
    navigate("/");
  };

  return (
    <Container style={{ maxWidth: "40%", marginTop: "4em" }}>
      <Row>
        <h2 style={{ textAlign: "center" }}>Sign Up</h2>
        <Form onSubmit={submitUser}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <Toast
          style={{
            position: "absolute",
            width: "80%",
            top: "10em",
          }}
          show={showSuccess}
        >
          <Toast.Header>
            <strong className="me-auto">Success!</strong>
          </Toast.Header>
          <Toast.Body>
            Account successfully created. <Spinner variant="success"></Spinner>
          </Toast.Body>
        </Toast>
      </Row>
    </Container>
  );
};

export default Signup;
