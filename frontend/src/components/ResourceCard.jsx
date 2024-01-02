import React from "react";
import PropTypes from "prop-types";

const ResourceCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
      <img
        className="w-full h-48 object-cover object-center"
        src={imageUrl}
        alt="Resource Image"
      />
      <div className="p-6">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:underline"
          >
            Learn more
          </a>
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
