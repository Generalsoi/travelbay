import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { ResetPassword } from "./components/ResetPassword";

function App() {
  return (
    <Routes>
      <Route element={<Login />} path="/" />
      <Route element={<ResetPassword />} path="/resetpassword" />
    </Routes>
  );
}

export default App;
