import React from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Messages from "./components/Messages";
import Analytics from "./components/Analytics";
import Resources from "./components/Resources";
import Explore from "./components/Explore";
import Investors from "./components/Investors";
import Settings from "./components/Settings";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Sidebar />} />
          <Route exact path="/home" element={<Sidebar />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/messages" element={<Messages />} />
          <Route exact path="/analytics" element={<Analytics />} />
          <Route exact path="/resources" element={<Resources />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/investors" element={<Investors />} />
          <Route exact path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
