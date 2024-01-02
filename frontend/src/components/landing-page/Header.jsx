import { Link } from "react-router-dom";
import { Button } from "../Button";

const LandingPageHeader = () => {
  return (
    <div className="hero-header ">
      <header className="bg-black text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-extrabold">GrowMore</h1>
            <p className="text-sm">Where Innovation Meets Investment</p>
          </div>
          <nav>
            <ul className="flex space-x-4 text-xl">
              <li
                className="hover flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#landing-aboutUs").offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                About
              </li>
              <li
                className="hover flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#landing-features").offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                Features
              </li>
              <li
                className="hover flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#landing-contactUs").offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                Contact Us
              </li>
              <li className="hover">
                <Link to="/register" className="navigation-link">
                  <Button
                    ButtonType="btn--primary"
                    content="Sign Up"
                    ButtonSize="btn--small"
                  ></Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default LandingPageHeader;
