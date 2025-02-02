import React from 'react';

const TodayActivityCard = ({ style }) => {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '374px',
    height: '180px',
    backgroundColor: '#ad42533d',
    borderRadius: '15px',
    padding: '20px',
    boxSizing: 'border-box',
    ...style
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  };

  const titleStyle = {
    fontFamily: 'Nunito, sans-serif',
    fontSize: '30px',
    fontWeight: 800,
    lineHeight: '117.9%',
    color: '#2b2b2b',
    margin: 0
  };

  const timeStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '15px',
    fontWeight: 700,
    color: '#7f7f7f',
    margin: 0
  };

  const imageStyle = {
    width: '142px',
    height: '142px',
    objectFit: 'contain'
  };

  return (
    <div style={cardStyle}>
      <div style={contentStyle}>
        <h2 style={titleStyle}>Today's activity</h2>
        <p style={timeStyle}>8:00 AM - 1:30 PM</p>
      </div>
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z57eQzRi7Jes38uu/jogging.png" 
        alt="Jogging activity" 
        style={imageStyle}
      />
    </div>
  );
};

TodayActivityCard.defaultProps = {
  style: {}
};

export default TodayActivityCard;