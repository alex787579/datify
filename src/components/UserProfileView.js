import React, { useState } from 'react';
import Sidebar from '../layout/Sidebars';
import Navbars from '../layout/Navbars';
import '../TableCss.css';
const UserProfileView = () => {
  const [userData] = useState({
    name: 'John Doe',
    age: 28,
    location: 'New York, USA',
    education: 'Bachelor of Science in Computer Science',
    interests: ['Travel', 'Music', 'Fitness'],
    gender: 'Male',
    maritalStatus: 'Single',
    profession: 'Software Engineer',
    aboutText: 'A passionate developer who loves coding and exploring new technologies.',
    image: 'img/00.jpg',
    looking: 'Girl',
    eat: 'Vegetarian',
    languages: 'English',
  });

  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    alert(`Message sent: ${message}`);
    setMessage(''); // Clear the input field after sending
  };

  return (
    <div className="container-xxl position-relative d-flex p-0">
    <Sidebar />
    <div className="content">
      <Navbars />
      <div className="container-fluid pt-4 px-4">
        <div className="row g-4">
          <div className="card rounded-3 border-0">
            <div className="card-header text-center text-white" style={{ backgroundColor: '#6A5ACD' }}>
              <h3>{userData.name}'s Profile</h3>
            </div>
            <div className="card-body">
              <div className="row">
                {/* Profile Image Section */}
                <div className="col-md-4 text-center mb-4 mb-md-0">
                  <img
                    src={userData.image}
                    alt={`${userData.name}'s profile`}
                    className="rounded-circle mb-3 shadow-lg"
                    style={{
                      width: '150px',
                      height: '150px',
                      objectFit: 'cover',
                      border: '5px solid #fff',
                      boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                  <h4 className="text-primary">{userData.name}</h4>
                  <p className="text-muted">{userData.profession}</p>
                </div>

                {/* Profile Details Section */}
                <div className="col-md-8">
                  <div className="table-responsive">
                  <table className="table table-0 custom-table">
                      <tbody>
                        {[
                          ['Age', userData.age],
                          ['Gender', userData.gender],
                          ['Marital Status', userData.maritalStatus],
                          ['Location', userData.location],
                          ['Education', userData.education],
                          ['Profession', userData.profession],
                          ['Looking For', userData.looking],
                          ['Eating Habits', userData.eat],
                          ['Languages', userData.languages],
                        ].map(([title, value], index) => (
                          <tr key={index}>
                            <th
                              style={{
                                backgroundColor: '#f8f9fa',
                                fontWeight: 'bold',
                                color: '#343a40',
                                fontSize: '1rem',
                                padding: '10px',
                              }}
                            >
                              {title}
                            </th>
                            <td
                              style={{
                                color: '#212529',
                                fontSize: '1rem',
                                padding: '10px',
                              }}
                            >
                              {value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* About Section */}
                  <div>
                    <h5 className="mt-4 text-dark">About:</h5>
                    <p>{userData.aboutText}</p>
                  </div>

                  {/* Interests Section */}
                  <div>
                    <h5 className="mt-4 text-dark">Interests:</h5>
                    <div className="d-flex flex-wrap">
                      {userData.interests.map((interest, index) => (
                        <span
                          key={index}
                          className="badge badge-pill m-1 px-3 py-2"
                          style={{
                            fontSize: '.8rem',
                            backgroundColor: '#6A5ACD',
                            color: '#fff',
                          }}
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                 {/* Chat Form */}
<div className="mt-4">
  {/* <h5 className="text-dark">Send a Message:</h5> */}
  <div className="input-group" style={{ alignItems: 'center' }}>
    <input
      type="text"
      className="form-control"
      placeholder="Type your message..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      style={{
        borderRadius: '20px',
        padding: '10px 15px',
        border: '1px solid #ccc',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        marginRight: '10px',
      }}
    />
    <button
      className="btn btn-primary"
      onClick={handleSendMessage}
      disabled={!message.trim()}
      style={{
        borderRadius: '20px',
        padding: '10px 20px',
        fontWeight: 'bold',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      Send
    </button>
  </div>
</div>
</div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileView;
