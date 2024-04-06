// Home.jsx
import React, { useState, useEffect } from 'react';

import companyData from '../../../company.json';
 // Importing JSON file
import Card from '../Card/Card';

function Home() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        // Fetching data from company.json
        setCompanies(companyData);
    }, []);

    const handleApply = (companyId) => {
        // Handle apply logic here
        console.log(`Applying to company with ID: ${companyId}`);
    };

    return (
        <div className="mx-auto w-full max-w-7xl grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {companies.map((company) => (
                <Card
                    key={company.id}
                    id={company.id}
                    name={company.name}
                    image={company.image}
                    yearOfFoundation={company.yearOfFoundation}
                    ceo={company.ceo}
                    rating={company.rating}
                    revenue={company.revenue}
                    onApply={handleApply}
                />

                 ))}
        </div>
    );
}

export default Home;
