// Login.js
// import React,  from 'react';
import React from 'react';
import '../Chat.css'; // Include the CSS file
import Sidebar from '../layout/Sidebars';
import Navbars from '../layout/Navbars';
// import { unstable_renderSubtreeIntoContainer } from 'react-dom';
const Messages = () => {


 
    return (
      <div className="container-xxl position-relative bg-white d-flex p-0">
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

  {/* Page header end */}
  {/* Content wrapper start */}
  <div className="content-wrapper">
    {/* Row start */}
    <div className="row gutters">
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="card m-0">
          {/* Row start */}
          <div className="row no-gutters">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
              <div className="users-container">
                <div className="chat-search-box">
                  <div className="input-group">
                    <input className="form-control" placeholder="Search" />
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-info">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </div>
                </div>
                <ul className="users">
                  <li className="person" data-chat="person1">
                    <div className="user">
                      <img
                        src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                        alt="Retail Admin"
                      />
                      <span className="status busy" />
                    </div>
                    <p className="name-time">
                      <span className="name">Steve Bangalter</span>
                      <span className="time">15/02/2019</span>
                    </p>
                  </li>
                  <li className="person" data-chat="person1">
                    <div className="user">
                      <img
                        src="https://www.bootdey.com/img/Content/avatar/avatar1.png"
                        alt="Retail Admin"
                      />
                      <span className="status offline" />
                    </div>
                    <p className="name-time">
                      <span className="name">Steve Bangalter</span>
                      <span className="time">15/02/2019</span>
                    </p>
                  </li>
                  <li className="person active-user" data-chat="person2">
                    <div className="user">
                      <img
                        src="https://www.bootdey.com/img/Content/avatar/avatar2.png"
                        alt="Retail Admin"
                      />
                      <span className="status away" />
                    </div>
                    <p className="name-time">
                      <span className="name">Peter Gregor</span>
                      <span className="time">12/02/2019</span>
                    </p>
                  </li>
                  <li className="person" data-chat="person3">
                    <div className="user">
                      <img
                        src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                        alt="Retail Admin"
                      />
                      <span className="status busy" />
                    </div>
                    <p className="name-time">
                      <span className="name">Jessica Larson</span>
                      <span className="time">11/02/2019</span>
                    </p>
                  </li>
                  <li className="person" data-chat="person4">
                    <div className="user">
                      <img
                        src="https://www.bootdey.com/img/Content/avatar/avatar4.png"
                        alt="Retail Admin"
                      />
                      <span className="status offline" />
                    </div>
                    <p className="name-time">
                      <span className="name">Lisa Guerrero</span>
                      <span className="time">08/02/2019</span>
                    </p>
                  </li>
                  <li className="person" data-chat="person5">
                    <div className="user">
                      <img
                        src="https://www.bootdey.com/img/Content/avatar/avatar5.png"
                        alt="Retail Admin"
                      />
                      <span className="status away" />
                    </div>
                    <p className="name-time">
                      <span className="name">Michael Jordan</span>
                      <span className="time">05/02/2019</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-9 col-9">
              <div className="selected-user">
                <span>
                  To: <span className="name">Emily Russell</span>
                </span>
              </div>
              <div className="chat-container">
                <ul className="chat-box chatContainerScroll">
                  <li className="chat-left">
                    <div className="chat-avatar">
                      <img
                        src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                        alt="Retail Admin"
                      />
                      <div className="chat-name">Russell</div>
                    </div>
                    <div className="chat-text">
                      Hello, I'm Russell.
                      <br />
                      How can I help you today?
                    </div>
                    <div className="chat-hour">
                      08:55 <span className="fa fa-check-circle" />
                    </div>
                  </li>
                  <li className="chat-right">
                    <div className="chat-hour">
                      08:56 <span className="fa fa-check-circle" />
                    </div>
                    <div className="chat-text">
                      Hi, Russell
                      <br /> I need more information about Developer Plan.
                    </div>
                    <div className="chat-avatar">
                      <img
                        src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                        alt="Retail Admin"
                      />
                      <div className="chat-name">Sam</div>
                    </div>
                  </li>
                  <li className="chat-left">
                    <div className="chat-avatar">
                      <img
                        src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                        alt="Retail Admin"
                      />
                      <div className="chat-name">Russell</div>
                    </div>
                    <div className="chat-text">
                      Are we meeting today?
                      <br />
                      Project has been already finished and I have results to
                      show you.
                    </div>
                    <div className="chat-hour">
                      08:57 <span className="fa fa-check-circle" />
                    </div>
                  </li>
                  <li className="chat-right">
                    <div className="chat-hour">
                      08:59 <span className="fa fa-check-circle" />
                    </div>
                    <div className="chat-text">
                      Well I am not sure.
                      <br />I have results to show you.
                    </div>
                    <div className="chat-avatar">
                      <img
                        src="https://www.bootdey.com/img/Content/avatar/avatar5.png"
                        alt="Retail Admin"
                      />
                      <div className="chat-name">Joyse</div>
                    </div>
                  </li>
                  <li className="chat-left">
                    <div className="chat-avatar">
                      <img
                        src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                        alt="Retail Admin"
                      />
                      <div className="chat-name">Russell</div>
                    </div>
                    <div className="chat-text">
                      The rest of the team is not here yet.
                      <br />
                      Maybe in an hour or so?
                    </div>
                    <div className="chat-hour">
                      08:57 <span className="fa fa-check-circle" />
                    </div>
                  </li>
                  <li className="chat-right">
                    <div className="chat-hour">
                      08:59 <span className="fa fa-check-circle" />
                    </div>
                    <div className="chat-text">
                      Have you faced any problems at the last phase of the
                      project?
                    </div>
                    <div className="chat-avatar">
                      <img
                        src="https://www.bootdey.com/img/Content/avatar/avatar4.png"
                        alt="Retail Admin"
                      />
                      <div className="chat-name">Jin</div>
                    </div>
                  </li>
                  <li className="chat-left">
                    <div className="chat-avatar">
                      <img
                        src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                        alt="Retail Admin"
                      />
                      <div className="chat-name">Russell</div>
                    </div>
                    <div className="chat-text">
                      Actually everything was fine.
                      <br />
                      I'm very excited to show this to our team.
                    </div>
                    <div className="chat-hour">
                      07:00 <span className="fa fa-check-circle" />
                    </div>
                  </li>
                </ul>
                <div className="form-group mt-3 mb-0">
                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder="Type your message here..."
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Row end */}
        </div>
      </div>
    </div>
    {/* Row end */}
  </div>
  {/* Content wrapper end */}
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
