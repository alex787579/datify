import React, { useState } from "react";
import './CardComponent.css';
import Sidebar from './layout/Sidebars';
import Navbars from './layout/Navbars';

const Dashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", age: 25, imageURLs: ["default_image_url.jpg"] },
    { id: 2, name: "Jane Smith", age: 30, imageURLs: ["default_image_url.jpg"] },
    { id: 3, name: "Alice Johnson", age: 28, imageURLs: ["default_image_url.jpg"] },
    { id: 4, name: "Bob Brown", age: 35, imageURLs: ["default_image_url.jpg"] },
  ]);

  const [likedProfiles, setLikedProfiles] = useState([]); // State to track liked profiles

  const handleUserClick = (userId) => {
    console.log(`View Profile clicked for User ID: ${userId}`);
    // Navigate to user profile (placeholder action)
  };

  const handleLikeClick = (likedUserId) => {
    setLikedProfiles((prevLikedProfiles) => [...prevLikedProfiles, likedUserId]);
    console.log(`Liked User ID: ${likedUserId}`);
  };

  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
      <Sidebar />
      <div className="content">
        <Navbars />
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            {users.map((user, index) => (
              <div className="col-sm-6 col-xl-3" key={index}>
                <div className="card shadow border-0 rounded" style={{ cursor: 'pointer' }}>
                  <img
                    className="card-img-top"
                    src={user.imageURLs[0] || "default_image_url.jpg"}
                    alt={user.name}
                    style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px', height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title mt-n1">{user.name}, {user.age}</h5>

                    {/* View Profile Button */}
                    <button className="btn btn-primary" style={{ backgroundColor: '#6A5ACD', borderColor: '#6A5ACD' }} onClick={() => handleUserClick(user.id)}>
                      View Profile
                    </button>

                    {/* Like Button: Disable and show "Liked" if the profile is already liked */}
                    {likedProfiles.includes(user.id) ? (
                      <button className="btn btn-secondary" style={{ marginLeft: '10px' }} disabled>
                        Liked
                      </button>
                    ) : (
                      <button className="btn btn-secondary" style={{ marginLeft: '10px' }} onClick={() => handleLikeClick(user.id)}>
                        Like
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-4">
            <button className="btn btn-outline-primary" onClick={() => console.log("Load More Clicked")}>Load More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
