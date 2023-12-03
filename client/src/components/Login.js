import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import md5 from 'md5';
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState('username');
  const [password, setPassword] = useState('password');

  const handleInputChange = (event) => {
    const target = event.target;
    let value = event.target.value;
    const name = target.name;

    if (target.name === "password") {
      document.getElementById(name).type = "password";
      value = md5(event.target.value);
    }

    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }

    document.getElementById(name).style.fontFamily = "Montserrat black";
  }

  const setEmptyValue = (event) => {
    const name = event.target.name
    document.getElementById(name).value = "";
  }

  const handleSubmit = (event) => {
    // Handle form submission logic
    event.preventDefault();
    // Add your logic here
  }

  return (
    <div className="login-page">
    <div className="login-container">
      <h4 id="login-title">Sign In</h4>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="text-area">
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleInputChange}
            onFocus={setEmptyValue}
            className="text-input"
          />
        </div>
        <div className="text-area">
          <input
            type="text"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            onFocus={setEmptyValue}
            className="text-input"
          />
        </div>
        <input
          type="submit"
          value="SIGN IN"
          className="btn"
        />
      </form>
      <Link to="/signup" className="signup-link">Sign Up</Link>
    </div>
    </div>
  )
}

export default Login;
