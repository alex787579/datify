import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from './layout/Sidebars';
import Navbars from './layout/Navbars';

const Setting = () => {
  const navigate = useNavigate();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [showEmailNotification, setShowEmailNotification] = useState(false);
  const [emailNotification, setEmailNotification] = useState("Yes");

  const handleDeleteAccount = () => {
    setConfirmDelete(true);
  };

  const confirmDeleteAccount = () => {
    console.log("Account deleted");
    navigate('/login');
  };

  const toggleEmailNotification = () => {
    setShowEmailNotification(!showEmailNotification);
  };

  const handleNotificationChange = (value) => {
    setEmailNotification(value);
    console.log(`Email Notification set to: ${value}`);
  };

  return (
    <div className="container-xxl position-relative d-flex p-0">
      <Sidebar />
      <div className="content">
        <Navbars />
        <div className="container-fluid pt-4 px-4">
          <div className="row">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="card-header bg-primary text-white">
                  <h3>Account Settings</h3>
                </div>
                <div className="card-body">
                  <div className="list-group">
                    <button className="list-group-item list-group-item-action d-flex align-items-center">
                      <i className="fa fa-file-alt me-3" style={{ fontSize: '1.5rem' }}></i>
                      <span>Privacy Policy</span>
                    </button>
                    <button className="list-group-item list-group-item-action d-flex align-items-center">
                      <i className="fa fa-question-circle me-3" style={{ fontSize: '1.5rem' }}></i>
                      <span>Need Help</span>
                    </button>
                    <button
                      className="list-group-item list-group-item-action d-flex align-items-center"
                      onClick={toggleEmailNotification}
                      aria-expanded={showEmailNotification}
                    >
                      <i className="fa fa-bell me-3" style={{ fontSize: '1.5rem' }}></i>
                      <span>Email Notification</span>
                      <i
                        className={`ms-auto fa ${
                          showEmailNotification ? "fa-chevron-up" : "fa-chevron-down"
                        }`}
                      ></i>
                    </button>
                    {showEmailNotification && (
                      <div className="mt-2 ps-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="emailNotification"
                            id="emailYes"
                            value="Yes"
                            checked={emailNotification === "Yes"}
                            onChange={() => handleNotificationChange("Yes")}
                          />
                          <label className="form-check-label" htmlFor="emailYes">
                            Yes
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="emailNotification"
                            id="emailNo"
                            value="No"
                            checked={emailNotification === "No"}
                            onChange={() => handleNotificationChange("No")}
                          />
                          <label className="form-check-label" htmlFor="emailNo">
                            No
                          </label>
                        </div>
                      </div>
                    )}
                    <button className="list-group-item list-group-item-action d-flex align-items-center" onClick={handleDeleteAccount}>
                      <i className="fa fa-trash-alt me-3" style={{ fontSize: '1.5rem' }}></i>
                      <span>Delete My Account</span>
                    </button>
                  </div>

                  {confirmDelete && (
                    <div className="mt-3 alert alert-warning">
                      <p>Are you sure you want to delete your account? This action is irreversible.</p>
                      <button className="btn btn-danger me-3" onClick={confirmDeleteAccount}>Confirm Deletion</button>
                      <button className="btn btn-secondary" onClick={() => setConfirmDelete(false)}>Cancel</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
