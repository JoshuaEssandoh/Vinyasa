import React from 'react';
import { Link } from 'react-router-dom';

const IndividualClasses = ({ style }) => {
  const classes = [
    
    {
      day: 'Monday',
      background: '#ffddf1',
      image: 'https://dashboard.codeparrot.ai/api/image/Z552Cw58MnUDluPX/img.png'
    },
    {
      day: 'Tuesday',
      background: '#f1f3fa',
      image: 'https://dashboard.codeparrot.ai/api/image/Z552Cw58MnUDluPX/img-2.png'
    },
    {
      day: 'Wednesday',
      background: '#ffd6d6',
      image: 'https://dashboard.codeparrot.ai/api/image/Z552Cw58MnUDluPX/img-3.png'
    },
    {
      day: 'Lunge',
      background: '#ddf2ff',
      image: 'https://dashboard.codeparrot.ai/api/image/Z552Cw58MnUDluPX/img-4.png'
    }
  ];

  const containerStyle = {
    width: '100%',
    minWidth: '360px',
    padding: '20px',
    boxSizing: 'border-box',
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
    width: '100%'
  };

  const cardStyle = {
    minWidth: '142px',
    height: '236px',
    borderRadius: '15px',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0
  };

  const dayStyle = {
    fontFamily: 'Nunito',
    fontSize: '20px',
    fontWeight: 800,
    color: '#2b2b2b',
    marginTop: '15px',
    textAlign: 'center',
    zIndex: 1
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <span style={titleStyle}>Individual Classes</span>
        <span style={seeAllStyle}>See all</span>
      </div>
      <div style={cardsContainerStyle}>
        {classes.map((item, index) => (
          <div
            key={index}
            style={{
              ...cardStyle,
              backgroundColor: item.background
            }}
          >
            <span style={dayStyle}>{item.day}</span>
            <Link to="/exercise">
            <img
              src={item.image}
              alt={item.day}
              style={imageStyle}
            />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

IndividualClasses.defaultProps = {
  style: {}
};

export default IndividualClasses;

