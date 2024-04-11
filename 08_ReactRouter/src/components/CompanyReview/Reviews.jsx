import React, { useState, useEffect } from 'react';
import reviewsData from '../../../reviews.json';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetching data from reviews.json
    setReviews(reviewsData);
  }, []);

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id} className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
          <div className="ml-4">
            <div className="flex items-center">
              <span className="font-semibold">{review.name}</span>
              <span className="mx-2">•</span>
              <span>{review.date}</span>
            </div>
            <div className="flex items-center mt-1">
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 1l2.4 5.3 5.3.5c.8.1 1.2 1.1.6 1.7l-4 3.9.9 5.2c.2 1.2-.9 2.2-2.1 2.2-.5 0-1-.2-1.4-.5l-4.7-2.5-4.7 2.5c-.8.4-1.8 0-2.1-1.1L2 11.5l-4-3.9c-.6-.6-.2-1.6.6-1.7l5.3-.5L10 1z" clipRule="evenodd"></path>
              </svg>
              <span className="ml-1">{review.rating}</span>
            </div>
            <p className="text-gray-700 mt-2">{review.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
