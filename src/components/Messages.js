// Login.js
// import React,  from 'react';
import React from 'react';
import '../Chat.css'; // Include the CSS file
import Sidebar from '../layout/Sidebars';
import Navbars from '../layout/Navbars';
// import { unstable_renderSubtreeIntoContainer } from 'react-dom';
const Messages = () => {


 
    return (
      <div className="container-xxl position-relative d-flex p-0">
      {/* Spinner Start */}
          {/* <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}
      {/* Spinner End */}
<Sidebar />
      {/* Content Start */}
      <div className="content">

  <Navbars />
    
  <div className="container-fluid pt-4 px-4">
          <div className="content-wrapper">
            <div className="row gutters">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="users-container">
                  <div className="chat-search-box">
                    <div className="input-group">
                      <input
                        className="form-control search-input"
                        placeholder="Search"
                      />
                      <button className="btn btn-primary search-btn">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </div>
                  <ul className="users">
                    {["Steve Bangalter", "Peter Gregor", "Jessica Larson"].map(
                      (name, index) => (
                        <li key={index} className="person">
                          <div className="user">
                            <img
                              src={`https://www.bootdey.com/img/Content/avatar/avatar${
                                index + 1
                              }.png`}
                              alt={name}
                            />
                            <span className="status online" />
                          </div>
                          <p className="name-time">
                            <span className="name">{name}</span>
                            <span className="time">15/02/2019</span>
                          </p>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="selected-user">
                  <span>
                    To: <span className="name">Emily Russell</span>
                  </span>
                </div>
                <div className="chat-container">
                  <ul className="chat-box">
                    {[
                      {
                        type: "left",
                        name: "Russell",
                        text: "Hello, I'm Russell. How can I help you today?",
                        time: "08:55",
                      },
                      {
                        type: "right",
                        name: "Sam",
                        text: "Hi, Russell. I need more information about Developer Plan.",
                        time: "08:56",
                      },
                    ].map((chat, index) => (
                      <li
                        key={index}
                        className={`chat-${chat.type}`}
                      >
                        <div className="chat-avatar">
                          <img
                            src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                            alt={chat.name}
                          />
                          <div className="chat-name">{chat.name}</div>
                        </div>
                        <div className="chat-text">{chat.text}</div>
                        <div className="chat-hour">
                          {chat.time} <span className="fa fa-check-circle" />
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="message-input">
                    <textarea
                      className="form-control"
                      rows={2}
                      placeholder="Type your message here..."
                    />
                    <button className="btn btn-primary send-btn">
                      <i className="fa fa-paper-plane" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer End */}
      </div>
      {/* Content End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up" />
      </a>
    </div>
    
  );
};

export default Messages;
