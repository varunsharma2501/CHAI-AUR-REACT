import React from 'react';
import applicationsData from '../../../applications.json';

function Applications() {
  const handleCancelApplication = (applicationTitle) => {
    // Logic for canceling the application
    console.log(`Canceled application for: ${applicationTitle}`);
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {applicationsData.map((application, index) => (
        <div key={index} className="p-4 bg-white shadow-md rounded-md">
          <h2 className="text-lg font-semibold mb-2">{application.title}</h2>
          <p className="text-sm text-gray-600 mb-1">Date of Application: {application.date_of_application}</p>
          <p className="text-sm text-gray-600 mb-1">Status: {application.status}</p>
          <p className="text-sm text-gray-600">{application.description}</p>
          <div className="mt-2">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              onClick={() => handleCancelApplication(application.title)}
            >
              Cancel
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Applications;
