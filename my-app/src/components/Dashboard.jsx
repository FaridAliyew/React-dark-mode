import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('https://api.github.com/users');
        setProfiles(response.data.slice(0, 11)); 
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <div className="container mt-4">
      <h1>GitHub Profiles</h1>
      <div className="row">
        {profiles.map(profile => (
          <div className="col-md-4 mb-4" key={profile.id}>
            <div className="card">
              <img src={profile.avatar_url} className="card-img-top" alt={profile.login} />
              <div className="card-body">
                <h5 className="card-title">{profile.login}</h5>
                <a href={profile.html_url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Profile</a>
              </div>
            </div>
          </div>
        ))}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="https://avatars.githubusercontent.com/u/166889149?s=400&u=85582c5efa63045004377578e9d819493270be6f&v=4" className="card-img-top" alt="FaridAliyew" />
            <div className="card-body">
              <h5 className="card-title">FaridAliyew</h5>
              <a href="https://github.com/FaridAliyew" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
