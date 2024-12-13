import React, { useEffect, useState } from 'react';
import '../Chat.css'; // Include the CSS file
import Sidebar from '../layout/Sidebars';
import Navbars from '../layout/Navbars';

const Online = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate fetching data with a timeout
    setLoading(true);
    setTimeout(() => {
      // Mock data for online users
      const mockUsers = [
        { id: 1, name: 'Alice', gender: 'Female', interestedIn: 'Male', photoURL: 'img/user1.jpg' },
        { id: 2, name: 'Bob', gender: 'Male', interestedIn: 'Female', photoURL: 'img/user2.jpg' },
        { id: 3, name: 'Charlie', gender: 'Non-Binary', interestedIn: 'All', photoURL: 'img/user3.jpg' },
      ];
      setUsers(mockUsers);
      setLoading(false);
    }, 1000); // Simulate 1-second delay
  }, []);

  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
      <Sidebar />
      <div className="content">
        <Navbars />
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-sm-12 col-md-12 col-xl-12">
              <div className="h-100 bg-light rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h6 className="mb-0">Online Users ({loading ? 'Loading...' : users.length})</h6>
                </div>

                {loading ? (
                  // Show loading state
                  <div className="text-center">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                  users.length > 0 ? (
                    // Check if there are users to display
                    users.map(user => (
                      <div className="d-flex align-items-center border-bottom py-3" key={user.id}>
                        <div className="position-relative">
                          <img
                            className="rounded-circle flex-shrink-0"
                            src={user.photoURL || "img/user.jpg"} // Use user's photoURL if available, else default
                            alt={user.name}
                            style={{ width: 40, height: 40 }}
                          />
                          {/* Green circle for online status */}
                          <span 
                            className="position-absolute bottom-0 end-0 p-1 bg-success border border-light rounded-circle"
                            style={{ width: 12, height: 12 }}
                          ></span>
                        </div>
                        <div className="w-100 ms-3">
                          <div className="d-flex w-100 justify-content-between">
                            <h6 className="mb-0">{user.name}</h6>
                            <button className="btn btn-primary" type="button">Chats</button>
                          </div>
                          <small className="text-muted">{user.gender} | Interested in: {user.interestedIn}</small>
                        </div>
                      </div>
                    ))
                  ) : (
                    // Message when no users are online
                    <p className="text-center">No online users</p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up" />
      </a>
    </div>
  );
};  

export default Online;
