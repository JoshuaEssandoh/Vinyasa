import React from 'react';

const IndividualClasses = ({ style = {} }) => {
  const classes = [
    {
      day: 'Monday',
      background: '#ffddf1',
      image: 'https://dashboard.codeparrot.ai/api/image/Z57eQzRi7Jes38uu/img.png'
    },
    {
      day: 'Tuesday',
      background: '#f1f3fa',
      image: 'https://dashboard.codeparrot.ai/api/image/Z57eQzRi7Jes38uu/img-2.png'
    },
    {
      day: 'Wednesday',
      background: '#ffd6d6',
      image: 'https://dashboard.codeparrot.ai/api/image/Z57eQzRi7Jes38uu/img-3.png'
    },
    {
      day: 'Lunge',
      background: '#ddf2ff',
      image: 'https://dashboard.codeparrot.ai/api/image/Z57eQzRi7Jes38uu/img-4.png'
    }
  ];

  const containerStyle = {
    padding: '20px',
    width: '100%',
    minWidth: '360px',
    ...style
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  };

  const titleStyle = {
    fontFamily: 'Inter',
    fontSize: '18px',
    fontWeight: 700,
    color: '#2b2b2b'
  };

  const seeAllStyle = {
    fontFamily: 'Inter',
    fontSize: '15px',
    fontWeight: 600,
    color: '#ff6079',
    cursor: 'pointer'
  };

  const cardsContainerStyle = {
    display: 'flex',
    gap: '10px',
    overflowX: 'auto',
    paddingBottom: '10px'
  };

  const cardStyle = {
    minWidth: '142px',
    height: '236px',
    borderRadius: '15px',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out'
  };

  const imageStyle = {
    width: '212px',
    height: '309px',
    objectFit: 'cover',
    position: 'absolute',
    top: '-31px',
    left: '-32px'
  };

  const dayLabelStyle = {
    fontFamily: 'Nunito',
    fontSize: '20px',
    fontWeight: 800,
    color: '#2b2b2b',
    textAlign: 'center',
    padding: '15px',
    position: 'relative',
    zIndex: 1
  };

  const handleCardHover = (e) => {
    e.currentTarget.style.transform = 'scale(1.02)';
  };

  const handleCardLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <span style={titleStyle}>Individual Classes</span>
        <span style={seeAllStyle}>See all</span>
      </div>
      <div style={cardsContainerStyle}>
        {classes.map((classItem, index) => (
          <div
            key={index}
            style={{
              ...cardStyle,
              backgroundColor: classItem.background
            }}
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
          >
            <div style={dayLabelStyle}>{classItem.day}</div>
            <img
              src={classItem.image}
              alt={classItem.day}
              style={imageStyle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndividualClasses;