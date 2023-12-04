import React, { useEffect, useState } from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
// We import all the components we need in our app
import Navbar from "./components/navbar";
import Login from "./components/Login";
import Signup from "./components/Signup.js";
import BookTickets from "./components/BookTickets.js";
import Home from "./pages/home-page/Home.js";
import Profile from "./components/Profile.js";
import Admin from "./components/admin.js";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import { AuthProvider } from "./contexts/AuthProvider.js";
import { Link } from "react-router-dom";
import ReAuthenticator from "./common/ReAuthenticator.js";

const App = () => {
  return (
    <AuthProvider>
      <ReAuthenticator />
      <Link to="/profile">Profile</Link>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/booktickets" element={<BookTickets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </AuthProvider>
  );
};
export default App;
