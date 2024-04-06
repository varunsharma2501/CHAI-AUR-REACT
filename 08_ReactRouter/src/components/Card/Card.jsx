// Card.jsx
import React from 'react';

function Card({ id, name, image, yearOfFoundation, ceo, rating, revenue, onApply }) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={image} alt={name} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{name}</h2>
                <p className="text-sm text-gray-600 mb-2">Year of Foundation: {yearOfFoundation}</p>
                <p className="text-sm text-gray-600 mb-2">CEO: {ceo}</p>
                <p className="text-sm text-gray-600 mb-2">Rating: {rating}</p>
                <p className="text-sm text-gray-600 mb-4">Revenue: {revenue}</p>
                <button onClick={() => onApply(id)} className="bg-blue-500 text-white py-2 px-4 rounded-lg">Apply</button>
            </div>
        </div>
    );
}

export default Card;
