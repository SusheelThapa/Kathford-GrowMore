import { Link } from "react-router-dom";

import { useRef } from "react";

import { useNavigate } from "react-router-dom";

import { login } from "../api/login";
import LandingPageHeader from "./landing-page/Header";
import LandingPageFooter from "./landing-page/Footer";

const Login = () => {
  const email = useRef("");
  const password = useRef("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      email: email.current.value,
      password: password.current.value,
    };

    // API Call
    login(data)
      .then(() => {
        console.log("Login Successful");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        navigate("/login");
      });
  };
  return (
    <>
      <LandingPageHeader />
      <div>
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
          <div>
            <a href="/">
              <h3 className="text-4xl font-bold text-green-600">growMore</h3>
            </a>
          </div>
          <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
            <form>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="email"
                    ref={email}
                    className="block w-full mt-1 py-1 px-3 border-none
                  text-md rounded-lg shadow-sm focus:outline-green-700
                  bg-gray-100"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block text-lg font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="password"
                    ref={password}
                    className="block w-full mt-1 py-1 px-3 border-none
                  text-md rounded-lg shadow-sm focus:outline-green-700
                  bg-gray-100"
                  />
                </div>
              </div>
              <a href="#" className="text-xs text-green-600 hover:underline">
                Forget Password?
              </a>
              <div className="flex items-center mt-4">
                <button
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                  onClick={handleLogin}
                >
                  Log in
                </button>
              </div>
            </form>
            <div className="mt-4 text-grey-600">
              Create an account?{" "}
              <span>
                <Link to="/register" className="text-green-600 hover:underline">
                  Register
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <LandingPageFooter />
    </>
  );
};

export default Login;
