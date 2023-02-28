import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";

function App() {
  return (
    <Routes>
      <Route element={<Login />} path="/" />
    </Routes>
  );
}

export default App;
