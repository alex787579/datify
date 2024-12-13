import React from 'react';
import Sidebar from '../layout/Sidebars';
import Navbars from '../layout/Navbars';

const Likes = () => {
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
      image: 'https://d2jdgazzki9vjm.cloudfront.net/top10-technologies/images/top-10-hollywood-actress1.png',
      name: 'User 3',
      time: '12:45 PM',
    },
    {
      id: 4,
      image: 'https://d2jdgazzki9vjm.cloudfront.net/top10-technologies/images/top-10-hollywood-actress1.png',
      name: 'User 4',
      time: '1:30 PM',
    },
    {
      id: 1,
      image: 'https://d2jdgazzki9vjm.cloudfront.net/top10-technologies/images/top-10-hollywood-actress1.png',
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
      image: 'https://s1.r29static.com/bin/entry/8e4/x/1398512/image.jpg',
      name: 'User 3',
      time: '12:45 PM',
    },
    {
      id: 4,
      image: 'https://s1.r29static.com/bin/entry/8e4/x/1398512/image.jpg',
      name: 'User 4',
      time: '1:30 PM',
    },
  ];

  const cardStyles = {
    cardContainer: {
      padding: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      background: '#ffffff',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease-in-out',
      position: 'relative',
      textAlign: 'center',
    },
    cardHover: {
      transform: 'scale(1.05)',
    },
    backgroundImage: {
      height: '200px',
      width: '100%',
      objectFit: 'cover',
    },
    cardBody: {
      padding: '1rem',
      background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)',
      color: '#fff',
      position: 'absolute',
      bottom: 0,
      width: '100%',
      textAlign: 'center',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      margin: '0.5rem 0',
    },
    cardTime: {
      fontSize: '0.9rem',
      color: '#ddd',
    },
    containerFluid: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      gap: '1.5rem',
      padding: '2rem',
    },
  };

  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
      <Sidebar />
      <div className="content">
        <Navbars />
        <div style={cardStyles.containerFluid}>
          {dummyData.map((user) => (
            <div key={user.id} style={cardStyles.cardContainer}>
              <div
                className="card"
                style={cardStyles.card}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <img src={user.image} alt={user.name} style={cardStyles.backgroundImage} />
                <div style={cardStyles.cardBody}>
                  <h5 style={cardStyles.cardTitle}>{user.name}</h5>
                  <small style={cardStyles.cardTime}>{user.time}</small>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Likes;
