import React, { useState } from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
// We import all the components we need in our app
import Navbar from "./components/navbar";
import Login from "./components/Login";
import Signup from "./components/Signup.js";
import BookTickets from "./components/BookTickets.js";
import Home from "./pages/home-page/Home.js";
import './style.css'

const App = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/booktickets" element={<BookTickets/>} />
            </Routes>
        </div>
    );
};
export default App;