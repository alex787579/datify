import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Navbars = () => {
  const [userName, setUserName] = useState("Guest"); // Static placeholder for user name
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    // Simulate logout functionality
    setUserName("Guest");
    navigate('/login');  // Redirect to login page
  };

  return (
    <>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
        <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
          <h2 className="text-primary mb-0">
            <i className="fa fa-hashtag" />
          </h2>
        </a>
        <a href="#" className="sidebar-toggler flex-shrink-0">
          <i className="fa fa-bars" />
        </a>
        <div className="navbar-nav align-items-center ms-auto">
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <img
                className="rounded-circle me-lg-2"
                src="img/user.jpg"
                alt="User"
                style={{ width: 40, height: 40 }}
              />
              <span className="d-none d-lg-inline-flex">
                {userName} {/* Display user's name */}
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
              <a href="/profile" className="dropdown-item">
                My Profile
              </a>
              <a href="/profile" className="dropdown-item">
                Settings
              </a>
              <a href="#" className="dropdown-item" onClick={handleLogout}>Log Out</a> {/* Logout */}
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </>
  );
};

export default Navbars;
