import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for routing

function AuthSection() {
    return (
        <div className="flex justify-between">
        {/* Company section */}
        <div className="flex-1 mr-4 bg-blue-500 rounded-lg p-6 text-white shadow-md ">
          <h2 className="text-2xl mb-4 font-bold">For Companies</h2>
          <p className="text-lg mb-4">We are the market-leading technical interview platform to identify and hire developers with the right skills.</p>
          {/* Use NavLink for routing */}
          <NavLink
            to="/login"
            className="bg-white text-blue-500 hover:bg-blue-300 hover:text-blue-500 px-6 py-3 rounded-lg font-semibold mr-2"
          >
            Login
          </NavLink>
          <p className="text-sm mt-2">Don't have an account? <NavLink to="/company/signup" className="text-blue-100 hover:underline">Sign up</NavLink>.</p>
        </div>
        {/* User section */}
        <div className="flex-1 bg-blue-500 rounded-lg p-6 text-white shadow-md">
          <h2 className="text-2xl mb-4 font-bold">For Developers</h2>
          <p className="text-lg mb-4">Join over 21 million developers, practice coding skills, prepare for interviews, and get hired.</p>
          {/* Use NavLink for routing */}
          <NavLink
            to="/login"
            className="bg-white text-blue-500 hover:bg-blue-300 hover:text-blue-500 px-6 py-3 rounded-lg font-semibold mr-2"
          >
            Login
          </NavLink>
          <p className="text-sm mt-2">Don't have an account? <NavLink to="/user/signup" className="text-blue-100 hover:underline">Sign up</NavLink>.</p>
        </div>
      </div>
    );
}

export default AuthSection;
