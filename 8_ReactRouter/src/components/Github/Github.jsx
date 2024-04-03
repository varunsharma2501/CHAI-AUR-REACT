import React, { useState, useEffect } from 'react';

function Github() {
    const [data, setData] = useState(null);

    // Fetch data from GitHub API
    useEffect(() => {
        fetch('https://api.github.com/users/varunsharma2501')
            .then(response => response.json())
            .then(data => { setData(data) })
            .catch(error => console.error(error)); // Handle any errors
    }, []);

    return (
        <div>
            {data ? (
                <div>
                    <h2>Github User Information:</h2>
                    <p>Username: {data.login}</p>
                    <p>Followers: {data.followers}</p>
                    <p>Public Repos: {data.public_repos}</p>
                    <p>Bio: {data.bio}</p>
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
}

export default Github;
