import React from 'react'
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
        </Routes>
      </Router>
      <Sidebar />
    </>
  );
}

export default App