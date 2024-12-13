import React from 'react';
import Sidebar from '../layout/Sidebars';
import Navbars from '../layout/Navbars';

const Visitors = () => {
  const dummyData = [
    {
      id: 1,
      image: 'https://s.ndtvimg.com/images/entities/300/virat-kohli-967.png',
      name: 'User 1',
      time: '10:30 AM',
    },
    {
      id: 2,
      image: 'https://s.ndtvimg.com/images/entities/300/virat-kohli-967.png',
      name: 'User 2',
      time: '11:15 AM',
    },
    {
      id: 3,
      image: 'https://s.ndtvimg.com/images/entities/300/virat-kohli-967.png',
      name: 'User 3',
      time: '12:45 PM',
    },
    {
      id: 4,
      image: 'https://s.ndtvimg.com/images/entities/300/virat-kohli-967.png',
      name: 'User 4',
      time: '1:30 PM',
    },
  ];

  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
      <Sidebar />
      <div className="content">
        <Navbars />
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            {dummyData.map((user) => (
              <div key={user.id} className="col-lg-3 col-md-6 col-sm-12">
                <div className="card shadow-sm" style={cardStyle}>
                  <div style={imageWrapperStyle}>
                    <img
                      src={user.image}
                      className="rounded-circle"
                      alt={user.name}
                      style={imageStyle}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h6 className="card-title mb-1" style={nameStyle}>
                      {user.name}
                    </h6>
                    <small className="text-muted" style={timeStyle}>
                      {user.time}
                    </small>
                    <div className="btn-container">
                      <button style={likeButtonStyle}>Like ❤️</button>
                      <button style={messageButtonStyle}>Message 💬</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  borderRadius: '16px',
  backgroundColor: '#fff',
  border: '1px solid #f0f0f0',
  transition: 'transform 0.3s ease-in-out',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  textAlign: 'center',
};

const imageWrapperStyle = {
  marginBottom: '15px',
};

const imageStyle = {
  width: '120px',
  height: '120px',
  objectFit: 'cover',
  border: '3px solid #ff6f61',
  padding: '5px',
};

const nameStyle = {
  fontSize: '1.2rem',
  fontWeight: '600',
  color: '#333',
};

const timeStyle = {
  fontSize: '0.9rem',
  color: '#888',
};

const likeButtonStyle = {
  backgroundColor: '#ff6f61',
  border: 'none',
  color: '#fff',
  padding: '8px 20px',
  borderRadius: '50px',
  marginRight: '10px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease-in-out',
};

const messageButtonStyle = {
  backgroundColor: '#4a90e2',
  border: 'none',
  color: '#fff',
  padding: '8px 20px',
  borderRadius: '50px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease-in-out',
};

export default Visitors;
