import React, { useEffect, useState } from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
// We import all the components we need in our app
import Navbar from "./components/navbar";
import Login from "./components/Login";
import Signup from "./components/Signup.js";
import BookTickets from "./components/BookTickets.js";
import Home from "./components/Home.js";
import Profile from "./components/Profile.js";
import Admin from "./components/admin.js";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import SelectMovie from "./components/SelectMovie.js";
import { AuthProvider } from "./contexts/AuthProvider.js";
import ReAuthenticator from "./common/ReAuthenticator.js";
import permissionDenied from "./components/permissionDenied.js";

const App = () => {
  return (
    <AuthProvider>
      <ReAuthenticator />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/booktickets" element={<BookTickets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/permissionDenied" element={<permissionDenied />} />
        <Route path="/selectMovie" element={<SelectMovie />} />
      </Routes>
    </AuthProvider>
  );
};
export default App;
