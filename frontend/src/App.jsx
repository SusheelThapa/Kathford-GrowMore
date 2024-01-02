import React from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Sidebar />} />
          <Route exact path="/home" element={<Sidebar />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
