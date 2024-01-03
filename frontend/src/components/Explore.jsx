import React from "react";
import img_logo from "../img/online-investment.jpg";


const Explore = () => {
  const additionalTopics  = [
    { Topic: 'InfoSys', Desc: 'Revolutionizing Video Conferencing Platform. Easy and free to use!' },
    { Topic: 'HealthTech', Desc: 'Revolutionizing healthcare through technology and innovation.' },
    { Topic: 'E-commerce Trends', Desc: 'Exploring the latest trends and strategies in online retail.' },
    { Topic: 'Clean Energy Solutions', Desc: 'Advancements in clean and sustainable energy technologies.' },
    { Topic: 'Cybersecurity Insights', Desc: 'Stay updated on the latest cybersecurity threats and solutions.' },
    { Topic: 'Smart Cities', Desc: 'The integration of technology to create efficient and sustainable urban environments.' },
    { Topic: 'Future of AI', Desc: 'Exploring the possibilities and challenges in the future of artificial intelligence.' },
    { Topic: 'Space Exploration', Desc: 'The latest developments in space exploration and technology.' },
    { Topic: 'Innovations in Education', Desc: 'Transformative technologies shaping the future of education.' },
    { Topic: 'Digital Marketing Strategies', Desc: 'Effective strategies for digital marketing in the modern landscape.' },
    { Topic: 'Blockchain Applications', Desc: 'Applications and use cases of blockchain technology across industries.' },
  ];
  return (
    <>
      <div className="explore-container flex flex-col">
        <header className="text-4xl md:text-5xl font-bold text-center mt-5 mb-10">
          Explore New Startups
        </header>
        <hr className="mx-auto w-full  border-gray-500 mb-10" />
        <div className="grid gap-8 mx-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {additionalTopics.map((topic, index) => (
  <div key={index} className="h-auto">
    <a
      href="#"
      className="flex flex-col items-center bg-white border-2 border-gray-200 shadow-md rounded-md hover:bg-gray-100 dark:border-black dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300"
    >
      <img
        className="object-cover w-full rounded-t-lg md:h-48 md:w-full md:rounded-none md:rounded-t-none"
        src={img_logo}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {topic.Topic}
        </h5>
        <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">
          {topic.Desc}
        </p>
      </div>
    </a>
  </div>
))}

        </div>
      </div>
    </>

  );
};

export default Explore;