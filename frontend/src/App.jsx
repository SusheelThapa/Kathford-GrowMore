import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Register from "./components/Register";
import Login from "./components/Login";

import Homepage from "./components/Homepage";

const App = () => {
  const pages = [
    "dashboard",
    "profile",
    "messages",
    "analytics",
    "resources",
    "explore",
    "investors",
    "subscribe",
    "settings",
  ];
  return (  
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />

          <Route
            exact
            path="/homepage"
            element={<Homepage active_page={pages[0]} pages={pages} />}
          />
          <Route
            exact
            path="/dashboard"
            element={<Homepage active_page={pages[0]} pages={pages} />}
          />
          <Route
            exact
            path="/profile"
            element={<Homepage active_page={pages[1]} pages={pages} />}
          />
          <Route
            exact
            path="/messages"
            element={<Homepage active_page={pages[2]} pages={pages} />}
          />
          <Route
            exact
            path="/analytics"
            element={<Homepage active_page={pages[3]} pages={pages} />}
          />
          <Route
            exact
            path="/resources"
            element={<Homepage active_page={pages[4]} pages={pages} />}
          />
          <Route
            exact
            path="/explore"
            element={<Homepage active_page={pages[5]} pages={pages} />}
          />
          <Route
            exact
            path="/investors"
            element={<Homepage active_page={pages[6]} pages={pages} />}
          />
          <Route
            exact
            path="/subscribe"
            element={<Homepage active_page={pages[7]} pages={pages} />}
          />
          <Route
            exact
            path="/settings"
            element={<Homepage active_page={pages[8]} pages={pages} />}
          />

          <Route exact path="/" element={<LandingPage />} />

          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
