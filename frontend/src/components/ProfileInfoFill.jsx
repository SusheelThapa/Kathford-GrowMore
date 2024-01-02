import React from 'react'
import { useState } from 'react';

const ProfileInfoFill = () => {

    const [formData, setFormData] = useState({
        name: '',
        industry: '',
        address: '',
        contactNo: '',
        contactEmail: '',
        teamSize: '',
        productStatus: '',
        websiteUrl: '',
        linkedinUrl: '',
        logo: null,
        patent: null,
        registrationInfo: null,
        description: '',
        pitchToInvestor: '',
        lookingFor: '',
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
        
        setFormData({
            name: '',
            industry: '',
            address: '',
            contactNo: '',
            contactEmail: '',
            teamSize: '',
            productStatus: '',
            websiteUrl: '',
            linkedinUrl: '',
            logo: null,
            patent: null,
            registrationInfo: null,
            description: '',
            pitchToInvestor: '',
            lookingFor: '',
        })
    };

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
        }} className="w-3/4 mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Venture Form</h2>

            {/* Text Fields */}
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                />
            </div>

            {/* Dropdown */}
            <div className="mb-4">
                <label htmlFor="industry" className="block text-sm font-medium text-gray-600">
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
                    <option value="">Select Industry</option>
                    <option value="technology">Technology</option>
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
                    name="contactNo"
                    value={formData.contactNo}
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
                    id="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                    Team Size
                </label>
                <input
                    type="text"
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                    Product Status
                </label>
                <input
                    type="text"
                    id="productStatus"
                    name="productStatus"
                    value={formData.productStatus}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                    Website Url
                </label>
                <input
                    type="text"
                    id="websiteUrl"
                    name="websiteUrl"
                    value={formData.websiteUrl}
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

            {/* Other Text Fields */}
            {/* ... (Repeat similar structure for other text fields) */}

            {/* File Fields */}
            <div className="mb-4">
                <label htmlFor="logo" className="block text-sm font-medium text-gray-600">
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
                <label htmlFor="patent" className="block text-sm font-medium text-gray-600">
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
                <label htmlFor="registrationInfo" className="block text-sm font-medium text-gray-600">
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
                <label htmlFor="description" className="block text-sm font-medium text-gray-600">
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
                <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                    Pitch To Investor
                </label>
                <textarea
                    id="pitchToInvestor"
                    name="pitchToInvestor"
                    value={formData.pitchToInvestor}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    rows="4"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="industry" className="block text-sm font-medium text-gray-600">
                    Looking For
                </label>
                <select
                    id="lookingFor"
                    name="lookingFor"
                    value={formData.lookingFor}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                >
                    {/* Add options for industries */}
                    <option value="">Looking For</option>
                    <option value="technology">Technology</option>
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
}

export default ProfileInfoFill