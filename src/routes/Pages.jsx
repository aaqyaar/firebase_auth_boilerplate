import React, { useContext } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "../components/Home";
import Login from "../forms/login/Login";
import Register from "../forms/register/Register";
import { UseAuthReg } from "../context/auth-reg";
function Pages() {
  const { user } = useContext(UseAuthReg);

  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Login />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default Pages;
