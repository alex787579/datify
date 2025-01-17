import React, { useState } from "react";
import './CardComponent.css';
import Sidebar from './layout/Sidebars';
import Navbars from './layout/Navbars';

const Dashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", age: 25, imageURLs: ["img/00.jpg"] },
    { id: 2, name: "Jane Smith", age: 30, imageURLs: ["img/2.jpg"] },
    { id: 3, name: "Alice Johnson", age: 28, imageURLs: ["img/6.jpg"] },
    { id: 4, name: "Bob Brown", age: 35, imageURLs: ["img/8.jpg"] },
  ]);

  const [likedProfiles, setLikedProfiles] = useState([]); // State to track liked profiles
  const [showChatModal, setShowChatModal] = useState(false); // State to toggle the modal
  const [chatUser, setChatUser] = useState(null); // Track which user to chat with

  const handleLikeClick = (likedUserId) => {
    setLikedProfiles((prevLikedProfiles) => [...prevLikedProfiles, likedUserId]);
    console.log(`Liked User ID: ${likedUserId}`);
  };

  const handleChatClick = (user) => {
    setChatUser(user); // Set the user to chat with
    setShowChatModal(true); // Show the modal
  };

  return (
    <div className="container-xxl position-relative d-flex p-0">
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
                  <div className="card-body text-center">
                    <h5 className="card-title mb-2">{user.name}</h5>
                    <p className="card-text">{user.age} years old</p>
                    <div className="d-flex justify-content-center gap-3">
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => handleLikeClick(user.id)}
                      >
                        <i className="fas fa-heart"></i> Like
                      </button>
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => handleChatClick(user)}
                      >
                        <i className="fas fa-comment"></i> Chat
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-4">
            <button className="btn btn-outline-primary" onClick={() => console.log("Load More Clicked")}>
              Load More
            </button>
          </div>

          {/* Chat Modal */}
          <div
            className={`modal fade ${showChatModal ? "show" : ""}`}
            style={{ display: showChatModal ? "block" : "none" }}
            id="aboutModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="aboutModalLabel"
            aria-hidden={!showChatModal}
          >
            <div className="modal-dialog modal-dialog-scrollable" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="aboutModalLabel">
                    Chat with {chatUser?.name}
                  </h5>
                  <button
                    type="button"
                    className="close"
                    onClick={() => setShowChatModal(false)}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Type your message here..."
                    ></textarea>
                    <button
                      type="button"
                      className="btn btn-primary mt-3"
                      onClick={() => console.log("Message sent")}
                    >
                      Send Message
                    </button>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowChatModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
