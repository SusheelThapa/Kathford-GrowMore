import ParticleAnimation from "./ParticleAnimation";

import animationConfig from "../json/particles.json";
import { Link } from 'react-router-dom'
import { Button } from "./Button";
import { RiTreeFill } from "react-icons/ri";
import img_onlineInvestment from "../img/online-investment.jpg"


const LandingPage = () => {
  return (
    <>
      <ParticleAnimation config={animationConfig} />

      {/* Hero header section here  */}
      <div className="hero-header ">
        <header className="bg-transparent text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-extrabold">GrowMore</h1>
              <p className="text-sm">Where Innovation Meets Investment</p>
            </div>
            <nav>
              <ul className="flex space-x-4 text-xl">
                <li className="hover flex items-center" onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#landing-aboutUs").offsetTop,
                    behavior: "smooth",
                  });
                }}>About
                </li>
                <li className="hover flex items-center" onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#landing-features").offsetTop,
                    behavior: "smooth",
                  });
                }}>Features</li>
                <li className="hover flex items-center" onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#landing-contactUs").offsetTop,
                    behavior: "smooth",
                  });
                }}>Contact Us</li>
                <li className="hover">
                  <Link to="/Home" className='navigation-link'>
                    <Button ButtonType="btn--primary" content="Sign Up" ButtonSize="btn--small"></Button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>


      <div className="landing-head-comp bg-transparent text-center h-lvh w-full text-white flex flex-col items-center justify-center">
        <div className="landing-heading bg-transparent text-8xl text-bold flex flex-row text-green-500">Grow <RiTreeFill />More</div>
        <div className="bg-transparent pt-6">
          <Link to="/Home" className='navigation-link'>
            <Button ButtonType="btn--outline" content="GET STARTED" ButtonSize="btn--medium"></Button>
          </Link>
        </div>
      </div>

      <div className="landing-summary bg-black">
        {/* <div className="landing-about h-96 w-4/5 py-5 border-solid border-4 rounded-3xl border-green-700 *:          
        content-center">
          <header className="landing-about-heading 

          text-4xl text-red-600
          
          ">
            About
          </header>
          <p className="landing-about-paragraph ">
            This is inside about
          </p>
        </div>
      <div className="landing-features
      flex items-center justify-center">
        <header className="landing-about-heading text-4xl text-red-600">
          Features
        </header>
      </div> */}

        <div className=" py-12">
          <div className="container mx-auto flex flex-row">
            <div className="text-white bg-opacity-90 p-8 rounded w-3/4">
              <h1 className="text-5xl font-bold mb-4" id="landing-aboutUs">About Us</h1>
              <p className=" text-white text-justify">
                Welcome to GrowMore – where innovation meets investment. We're dedicated to cultivating transformative business ideas and fostering connections between entrepreneurs and investors. Our platform is more than an idea marketplace; it's a dynamic ecosystem with an intelligent recommender system. This technology analyzes user preferences and market dynamics to provide personalized recommendations. Entrepreneurs find investors who resonate with their vision, and investors discover curated opportunities aligned with their goals. Join us in shaping the future of innovation!
              </p>
              <p className="text-white mt-4 flex items-center justify-center text-justify">
                Join GrowMore in creating a future where innovation thrives, and investments catalyze the success of pioneering ventures.
              </p>
            </div>
            <div className="about-image w-1/4 flex items-center justify-center">
              <img src={img_onlineInvestment} alt="Online Investment" className="w-full h-full object-cover " />
            </div>
          </div>
        </div>

        <div className=" py-12">
          <div className="container mx-auto">
            <div className="text-white bg-opacity-90 p-8 rounded shadow-md">
              <h1 className="text-5xl font-bold mb-4" id="landing-features">Features</h1>
              <p className=" text-white text-justify">
                Welcome to our website! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget tortor nec purus bibendum ultricies sit amet vitae justo. Mauris facilisis risus ac massa fermentum, vel consectetur lacus bibendum.
              </p>
              <p className="text-white mt-4 text-justify">
                Our mission is to provide valuable information and services to our users. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </div>
          </div>
        </div>

        <div className=" py-12">
          <div className="container mx-auto">
            <section className="bg-white dark:bg-black">
              <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white" id="landing-contactUs">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                <form action="#" className="space-y-8">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                    <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                  </div>
                  <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-blue-600">Send message</button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
