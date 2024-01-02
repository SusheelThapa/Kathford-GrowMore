import React from "react";
import PropTypes from "prop-types";

const ResourceCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="grid grid-rows-1 ">
      <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={imageUrl}
              alt="Resource Image"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {title}
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                {description}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

ResourceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ResourceCard;
