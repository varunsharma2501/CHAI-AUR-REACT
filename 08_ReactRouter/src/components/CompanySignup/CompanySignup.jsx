import React, { useState } from 'react';

function CompanySignup() {
    const [companyName, setCompanyName] = useState('');
    const [password, setPassword] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');
    const [companyLocation, setCompanyLocation] = useState('');
    const [averagePackage, setAveragePackage] = useState('');
    const [description, setDescription] = useState('');

    const handleSignup = () => {
        // Your signup logic here, e.g., send a request to the server
        console.log('Company Name:', companyName);
        console.log('Password:', password);
        console.log('Company Email:', companyEmail);
        console.log('Company Location:', companyLocation);
        console.log('Average Package:', averagePackage);
        console.log('Description:', description);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Company Signup</h2>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="companyName">
                    Company Name
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="companyName"
                    type="text"
                    placeholder="Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="companyEmail">
                    Company Email
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="companyEmail"
                    type="email"
                    placeholder="Company Email"
                    value={companyEmail}
                    onChange={(e) => setCompanyEmail(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="companyLocation">
                    Company Location
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="companyLocation"
                    type="text"
                    placeholder="Company Location"
                    value={companyLocation}
                    onChange={(e) => setCompanyLocation(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="averagePackage">
                    Average Package
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="averagePackage"
                    type="text"
                    placeholder="Average Package"
                    value={averagePackage}
                    onChange={(e) => setAveragePackage(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                    Description
                </label>
                <textarea
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSignup}
            >
                Submit
            </button>
        </div>
    );
}

export default CompanySignup;
