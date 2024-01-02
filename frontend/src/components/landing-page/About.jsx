import img_onlineInvestment from "../../img/online-investment.jpg";

const LandingPageAbout = () => {
  return (
    <div className=" py-12">
      <div className="container mx-auto flex flex-row">
        <div className="text-white bg-opacity-90 p-8 rounded w-3/4">
          <h1 className="text-5xl font-bold mb-4" id="landing-aboutUs">
            About Us
          </h1>
          <p className=" text-white text-justify">
            Welcome to GrowMore – where innovation meets investment. We are
            dedicated to cultivating transformative business ideas and fostering
            connections between entrepreneurs and investors. Our platform is
            more than an idea marketplace. Its a dynamic ecosystem with an
            intelligent recommender system. This technology analyzes user
            preferences and market dynamics to provide personalized
            recommendations. Entrepreneurs find investors who resonate with
            their vision, and investors discover curated opportunities aligned
            with their goals. Join us in shaping the future of innovation!
          </p>
          <p className="text-white mt-4 flex items-center justify-center text-justify">
            Join GrowMore in creating a future where innovation thrives, and
            investments catalyze the success of pioneering ventures.
          </p>
        </div>
        <div className="about-image w-1/4 flex items-center justify-center">
          <img
            src={img_onlineInvestment}
            alt="Online Investment"
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPageAbout;
