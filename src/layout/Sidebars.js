import React from 'react';
// E:\dating-react\datify\src\common\Sidebar.js
const Sidebar = () => {
  return (
    <div className="sidebar pe-4 pb-3">
    <nav className="navbar bg-light navbar-light">
      <a href="/" className="navbar-brand mx-4 mb-3">
        <h3 className="text-primary">
          {/* <i className="fa fa-hashtag me-2" /> */}
          Datify
        </h3>
      </a>
      {/* <div className="d-flex align-items-center ms-4 mb-4">
        <div className="position-relative">
          <img
            className="rounded-circle"
            src="img/user.jpg"
            alt=""
            style={{ width: 40, height: 40 }}
          />
          <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
        </div>
        <div className="ms-3">
          <h6 className="mb-0">Jhon</h6>
          <span>Admin</span>
        </div>
      </div> */}
      <div className="navbar-nav w-100">
      <a href="/matches" className="nav-item nav-link active">
      <i className="fa fa-users me-2" />  {/* Dashboard Icon */}
    Matches
  </a>
    <a href="/online" className="nav-item nav-link">
      <i className="fa fa-globe me-2" /> {/* Online Users Icon */}
      Online
    </a>
    <a href="/search" className="nav-item nav-link">
      <i className="fa fa-search me-2" /> {/* Online Users Icon */}
      search
    </a>
    <a href="/likes" className="nav-item nav-link">
      <i className="fa fa-heart me-2" /> {/* Likes Icon */}
      Likes You
    </a>
    <a href="/messages" className="nav-item nav-link">
      <i className="fa fa-comments me-2" /> {/* Messages Icon */}
      Chat
    </a>
    {/* <a href="/visitors" className="nav-item nav-link">
      <i className="fa fa-user-friends me-2" />
      Visitors
    </a> */}
      {/* <a href="/dashboard" className="nav-item nav-link active">
          <i className="fa fa-tachometer-alt me-2" />
          Matches
        </a>
        <a href="/online" className="nav-item nav-link">
        <i className="fa fa-tachometer-alt me-2" />
          Online
        </a>
        <a href="/likes" className="nav-item nav-link">
        <i className="fa fa-tachometer-alt me-2" />
          Likes You
        </a>
        <a href="/messages" className="nav-item nav-link">
          <i className="fa fa-tachometer-alt me-2" />
          Messages
        </a>
        <a href="/visitors" className="nav-item nav-link">
          <i className="fa fa-tachometer-alt me-2" />
          Visitors
        </a> */}
        {/* <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <i className="fa fa-laptop me-2" />
            Elements
          </a>
          <div className="dropdown-menu bg-transparent border-0">
            <a href="button.html" className="dropdown-item">
              Buttons
            </a>
            <a href="typography.html" className="dropdown-item">
              Typography
            </a>
            <a href="element.html" className="dropdown-item">
              Other Elements
            </a>
          </div>
        </div> */}
        {/* <a href="widget.html" className="nav-item nav-link">
          <i className="fa fa-th me-2" />
          Matches
        </a>
        <a href="form.html" className="nav-item nav-link">
          <i className="fa fa-keyboard me-2" />
           Online
        </a>
        <a href="table.html" className="nav-item nav-link">
          <i className="fa fa-table me-2" />
          Search
        </a>
        <a href="chart.html" className="nav-item nav-link">
          <i className="fa fa-chart-bar me-2" />
          Likes
        </a>
        <a href="chart.html" className="nav-item nav-link">
          <i className="fa fa-chart-bar me-2" />
          Messages
        </a>
        <a href="chart.html" className="nav-item nav-link">
          <i className="fa fa-chart-bar me-2" />
          Visitors
        </a> */}
     
      </div>
    </nav>
  </div>
  );
};

export default Sidebar;
