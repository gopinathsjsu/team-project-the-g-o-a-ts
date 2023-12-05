import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import apiClient from "../api-client/apiClient";
import { CanceledError } from "axios";
import { useNavigate } from "react-router-dom";
import Toast from "react-bootstrap/Toast";
import Spinner from "react-bootstrap/Spinner";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useAuth } from "../contexts/AuthProvider";
import { jwtDecode } from "jwt-decode";
import { fetchUserById } from "../common/apiUtils";

const Signup = () => {
  const { login } = useAuth();
  // const controller = new AbortController();

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const [showSuccess, setShowSuccess] = useState(false);
  const [memType, setMemType] = useState("Regular");
  let username = "";
  let password = "";

  const navigate = useNavigate();
  const submitUser = async (e) => {
    e.preventDefault();
    let signedUp = false;
    await apiClient
      .post("/users/register", {
        // signal: controller.signal,
        name: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value,
        role: "Member",
        membershipType: memType,
      })
      .then(() => {
        signedUp = true;
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        console.log(err.message);
        alert("Failed to create user, check if you already have an account!");
      });
    if (signedUp) {
      console.log("Added User");
      username = e.target[1].value;
      password = e.target[2].value;
      setShowSuccess(true);
      loginUser();
    }
  };

  const loginUser = async () => {
    let loggedIn = false;
    await apiClient
      .post("/users/login", {
        email: username,
        password: password,
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
      await sleep(1750);
      navigate("/");
    }
  };

  const handleMemChange = (e) => {
    e.preventDefault();
    setMemType(e.target.value);
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
          <br />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Membership Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={memType}
              label="Membership Type"
              onChange={handleMemChange}
            >
              <MenuItem value={"Regular"}>Regular</MenuItem>
              <MenuItem value={"Premium"}>Premium ($15/yr)</MenuItem>
            </Select>
          </FormControl>

          <br />

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
