import React, { useState } from "react";
import md5 from "md5";
import "./signup.css";

const Signup = () => {
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
    <div className="signup-page">
      <div className="signup-container">
        <h4 id="signup-title">Sign Up</h4>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="signup-text-area">
            <input
              type="text"
              id="username"
              name="username"
              value={username}  
              onChange={handleInputChange}
              onFocus={setEmptyValue}
              className="signup-input"
            />
          </div>
          <div className="signup-text-area">
            <input
              type="text"
              id="password"
              name="password"
              value={password}  
              onChange={handleInputChange}
              onFocus={setEmptyValue}
              className="signup-input"
            />
          </div>
          <input type="submit" value="SIGN UP" className="btn" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
