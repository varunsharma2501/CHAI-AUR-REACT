import React from 'react';
import applicationsData from '../../../applicants.json';

function Applicants() {
  const handleSelectNextRound = (applicantName) => {
    // Logic for selecting the applicant for the next round
    console.log(`Selected ${applicantName} for the next round.`);
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {applicationsData.map((applicant, index) => (
        <div key={index} className="p-4 bg-white shadow-md rounded-md">
          <h2 className="text-lg font-semibold mb-2">{applicant.name}</h2>
          <p className="text-sm text-gray-600 mb-1">Date of Birth: {applicant.date_of_birth}</p>
          <p className="text-sm text-gray-600 mb-1">Experience: {applicant.experience}</p>
          <p className="text-sm text-gray-600 mb-1">Education: {applicant.education}</p>
          <div className="mt-2">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={() => handleSelectNextRound(applicant.name)}
            >
              Select for Next Round
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Applicants;
