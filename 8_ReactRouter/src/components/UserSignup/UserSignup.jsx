import React, { useState } from 'react';

function UserSignup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [leetcode, setLeetcode] = useState('');
    const [github, setGithub] = useState('');
    const [experience, setExperience] = useState('');
    const [resume, setResume] = useState(null);

    const handleSignup = () => {
        // Your signup logic here, e.g., send a request to the server
        console.log('Username:', username);
        console.log('LinkedIn:', linkedin);
        console.log('LeetCode:', leetcode);
        console.log('GitHub:', github);
        console.log('Experience:', experience);
        console.log('Resume:', resume);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">User Signup</h2>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                    Username 
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="text"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="linkedin">
                    LinkedIn
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="linkedin"
                    type="text"
                    placeholder="LinkedIn"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="leetcode">
                    LeetCode
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="leetcode"
                    type="text"
                    placeholder="LeetCode"
                    value={leetcode}
                    onChange={(e) => setLeetcode(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="github">
                    GitHub
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="github"
                    type="text"
                    placeholder="GitHub"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="experience">
                    Experience
                </label>
                <select
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                >
                    <option value="">Select Experience</option>
                    <option value="student">Student</option>
                    <option value="1-5 years exp">1-5 years exp</option>
                    <option value="above 5 years">Above 5 years</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="resume">
                    Resume
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setResume(e.target.files[0])}
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

export default UserSignup;
