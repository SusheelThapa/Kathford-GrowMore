import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/Home" element={<Home />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
};

export default App;
