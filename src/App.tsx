import React from "react";
import { Routes, Route } from "react-router-dom";
import { CreateAccount } from "./components/CreateAccount";
import { Login } from "./components/Login";
import { ResetPassword } from "./components/ResetPassword";

function App() {
  return (
    <Routes>
      <Route element={<Login />} path="/" />
      <Route element={<ResetPassword />} path="/resetpassword" />
      <Route element={<CreateAccount />} path="/createaccount" />
    </Routes>
  );
}

export default App;
