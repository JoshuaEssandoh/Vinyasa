import React from 'react';

const TodayActivityCard = ({ style }) => {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#ad42533d',
    borderRadius: '15px',
    width: '100%',
    maxWidth: '374px',
    minHeight: '180px',
    boxSizing: 'border-box',
    ...style
  };

  const textContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    flexGrow: 1
  };

  const titleStyle = {
    fontFamily: 'Nunito, sans-serif',
    fontSize: '30px',
    fontWeight: 800,
    lineHeight: '1.18',
    color: '#2B2B2B',
    margin: 0
  };

  const timeStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '15px',
    fontWeight: 700,
    color: '#7F7F7F',
    margin: '10px 0 0 0'
  };

  const imageStyle = {
    width: '142px',
    height: '142px',
    objectFit: 'contain'
  };

  return (
    <div style={cardStyle}>
      <div style={textContainerStyle}>
        <h2 style={titleStyle}>Today's activity</h2>
        <p style={timeStyle}>8:00 AM - 1:30 PM</p>
      </div>
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z552Cw58MnUDluPX/jogging.png" 
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

