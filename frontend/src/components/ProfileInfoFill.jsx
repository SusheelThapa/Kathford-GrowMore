import React from "react";
import { useState } from "react";
import { getCookieValue } from "../services/cookie";
import { completeProfileStartup } from "../api/completeProfileStartup";

const ProfileInfoFill = () => {
  const [formData, setFormData] = useState({
    user: getCookieValue("id"),
    name: getCookieValue("name"),
    industry: "Agriculture",
    address: "",
    contact_no: "",
    contact_email: getCookieValue("email"),
    team_size: "",
    product_status: "Private",
    website_url: "",
    linkedin_url: "",
    description: "",
    pitch_to_investor: "",
    looking_for: "Co-founder",
    is_verified: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);

    // API Call
    completeProfileStartup(formData)

    setFormData({
      user: getCookieValue("id"),
      name: getCookieValue("name"),
      industry: "Agriculture",
      address: "",
      contact_no: "",
      contact_email: getCookieValue("email"),
      team_size: "",
      product_status: "Private",
      website_url: "",
      linkedin_url: "",
      description: "",
      pitch_to_investor: "",
      looking_for: "Co-founder",
      is_verified: false,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
      className="w-3/4 mx-auto mt-8 p-4 bg-white shadow-md rounded-md"
    >
      <h2 className="text-2xl font-bold mb-4">Venture Form</h2>

      {/* Text Fields */}
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-600"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          readOnly
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      {/* Dropdown */}
      <div className="mb-4">
        <label
          htmlFor="industry"
          className="block text-sm font-medium text-gray-600"
        >
          Industry
        </label>
        <select
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        >
          {/* Add options for industries */}
          <option value="Agriculture">Agriculture</option>
          <option value="Education">Education</option>
          <option value="Finance">Finance</option>
          <option value="Health">Health</option>
          <option value="IT">IT</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Contact Number
        </label>
        <input
          type="text"
          id="contactNo"
          name="contact_no"
          value={formData.contact_no}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Contact Email
        </label>
        <input
          type="text"
          id="contact_email"
          name="contact_email"
          value={formData.contact_email}
          onChange={handleInputChange}
          readOnly
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Team Size
        </label>
        <input
          type="number"
          id="team_size"
          name="team_size"
          value={formData.team_size}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="industry"
          className="block text-sm font-medium text-gray-600"
        >
          Product Status
        </label>
        <select
          id="product_status"
          name="product_status"
          value={formData.product_status}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        >
          {/* Add options for industries */}
          <option value="Private">Private</option>
          <option value="Public Beta">Public Beta</option>
          <option value="Launched">Launched</option>
          <option value="Acquired">Acquired</option>
          <option value="Others">Others</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Website Url
        </label>
        <input
          type="text"
          id="website_url"
          name="website_url"
          value={formData.website_url}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Linkedin Url
        </label>
        <input
          type="text"
          id="linkedinUrl"
          name="linkedinUrl"
          value={formData.linkedinUrl}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="logo"
          className="block text-sm font-medium text-gray-600"
        >
          Logo
        </label>
        <input
          type="file"
          id="logo"
          name="logo"
          onChange={handleFileChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="patent"
          className="block text-sm font-medium text-gray-600"
        >
          Patent
        </label>
        <input
          type="file"
          id="patent"
          name="patent"
          onChange={handleFileChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="registrationInfo"
          className="block text-sm font-medium text-gray-600"
        >
          Registration Info
        </label>
        <input
          type="file"
          id="registrationInfo"
          name="registrationInfo"
          onChange={handleFileChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      {/* Textarea */}
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-600"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border rounded-md"
          rows="4"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-600"
        >
          Pitch To Investor
        </label>
        <textarea
          id="pitch_to_investor"
          name="pitch_to_investor"
          value={formData.pitch_to_investor}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border rounded-md"
          rows="4"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="industry"
          className="block text-sm font-medium text-gray-600"
        >
          Looking For
        </label>
        <select
          id="looking_for"
          name="looking_for"
          value={formData.looking_for}
          onChange={handleInputChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        >
          {/* Add options for industries */}
          <option value="Co-founder">Co-Founder</option>
          <option value="Investor">Investor</option>
          <option value="Other">Other</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* Submit Button */}
      <div className="mb-4">
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ProfileInfoFill;
