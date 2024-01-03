import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Register from "./components/Register";
import Login from "./components/Login";

import Homepage from "./components/Homepage";
import Form from "./components/Form";

const App = () => {
  const pages = [
    "dashboard",
    "profile",
    "messages",
    "notification",
    "resources",
    "explore",
    "investors",
    "growAI",
    "subscribe",
    "settings",
    "completeprofile",

  ];
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/form" element={<Form />} />

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
            path="/notification"
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
            path="/growAI"
            element={<Homepage active_page={pages[7]} pages={pages} />}
          />
          <Route
            exact
            path="/subscribe"
            element={<Homepage active_page={pages[8]} pages={pages} />}
          />

          <Route exact path="/" element={<LandingPage />} />

          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/completeprofile"
            element={<Homepage active_page={pages[10]} pages={pages} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
