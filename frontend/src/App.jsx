import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
