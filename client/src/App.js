import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Registeration from "./pages/Registeration";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registeration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
