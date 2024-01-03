const LandingPageFeature = () => {
  return (
    <div className=" py-12">
      <div className="container mx-auto">
        <div className="text-white bg-opacity-90 p-8 rounded shadow-md">
          <h1 className="text-5xl font-bold mb-4" id="landing-features">
            Features
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* Feature 1 */}
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-4 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="text-lg font-medium text-white ">Add Innovative Ideas</p>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-4 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="text-lg font-medium text-white">Connect with Social Media</p>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-4 text-purple-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p className="text-lg font-medium text-white">Personalized Idea Recommendations</p>
          </div>
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default LandingPageFeature;
