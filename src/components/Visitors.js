import React, { useState, useEffect } from 'react';
import Sidebar from '../layout/Sidebars';
import Navbars from '../layout/Navbars';

const Visitors = () => {
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetching with static data
    const mockVisitors = [
      {
        id: 1,
        name: 'John Doe',
        image: 'https://via.placeholder.com/120',
        visitedAt: new Date(),
      },
      {
        id: 2,
        name: 'Jane Smith',
        image: 'https://via.placeholder.com/120',
        visitedAt: new Date(),
      },
      {
        id: 3,
        name: 'Alice Johnson',
        image: 'https://via.placeholder.com/120',
        visitedAt: new Date(),
      },
    ];

    setTimeout(() => {
      setVisitors(mockVisitors);
      setLoading(false);
    }, 1000); // Simulate a 1-second data fetch
  }, []);

  if (loading) {
    return <p>Loading visitors...</p>;
  }

  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
      <Sidebar />
      <div className="content">
        <Navbars />
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            {visitors.length > 0 ? (
              visitors.map((visitor) => (
                <div key={visitor.id} className="col-lg-3 col-md-6 col-sm-12">
                  <div className="card shadow-sm" style={cardStyle}>
                    <div style={imageWrapperStyle}>
                      <img
                        src={visitor.image || "default_image_url.jpg"} // Visitor image or default
                        className="rounded-circle"
                        alt={visitor.name || 'Anonymous'} // Visitor name or 'Anonymous'
                        style={imageStyle}
                      />
                    </div>
                    <div className="card-body text-center">
                      <h6 className="card-title mb-1" style={nameStyle}>
                        {visitor.name || 'Anonymous'} {/* Visitor name */}
                      </h6>
                      <small className="text-muted" style={timeStyle}>
                        {visitor.visitedAt.toLocaleTimeString()} {/* Visit time */}
                      </small>
                      <div className="btn-container">
                        <button style={likeButtonStyle}>Like ❤️</button>
                        <button style={messageButtonStyle}>Message 💬</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No visitors found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles for the cards and other elements
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
