import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/services/PrivateRoute";
import RecoverPassword from "./components/RecoverPassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute element={Home} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/recoverpassword" element={<RecoverPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
