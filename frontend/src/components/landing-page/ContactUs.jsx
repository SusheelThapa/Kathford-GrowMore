const LandingPageContactUs = () => {
  return (
    <div className=" py-12">
      <div className="container mx-auto">
        <section className="bg-black">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2
              className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white"
              id="landing-contactUs"
            >
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  text-gray-400 sm:text-xl">
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>
            <form action="#" className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm border  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-primary-500  focus:border-primary-500  shadow-sm-light"
                  placeholder="email@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm  rounded-lg border  shadow-sm focus:ring-primary-500 focus:border-primary-500  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-primary-500  focus:border-primary-500  shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm  rounded-lg shadow-sm border  focus:ring-primary-500 focus:border-primary-500  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-primary-500  focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300  bg-primary-600  hover:bg-primary-700  focus:ring-primary-800 bg-blue-600"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPageContactUs;
