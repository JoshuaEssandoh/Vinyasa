import React from 'react';

const TaglineSection = ({ day = 'Monday', quote = '"I am energized and empowered as I start my day with movement and strength."', duration = '10.00 mins', status = 'Active' }) => {
  const containerStyle = {
    width: '100%',
    minWidth: '380px',
    padding: '20px',
    backgroundColor: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'flex-start'
  };

  const dayStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '24px',
    fontWeight: 800,
    color: '#2B2B2B'
  };

  const quoteStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '21px',
    color: '#C4C4C4',
    maxWidth: '373px'
  };

  const tagsContainerStyle = {
    display: 'flex',
    gap: '14px',
    marginTop: '10px'
  };

  const tagStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    borderRadius: '5px',
  };

  const durationTagStyle = {
    ...tagStyle,
    backgroundColor: '#AD425340',
  };

  const activeTagStyle = {
    ...tagStyle,
    backgroundColor: '#F8E1D2',
  };

  const iconStyle = {
    width: '16px',
    height: '16px',
  };

  const durationTextStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '15.71px',
    fontWeight: 700,
    color: '#FF6079'
  };

  const activeTextStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '15.71px',
    fontWeight: 700,
    color: '#FA7B34'
  };

  return (
    <div style={containerStyle}>
      <div style={dayStyle}>{day}</div>
      <div style={quoteStyle}>{quote}</div>
      <div style={tagsContainerStyle}>
        <div style={durationTagStyle}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/icon-c.png" alt="clock" style={iconStyle} />
          <span style={durationTextStyle}>{duration}</span>
        </div>
        <div style={activeTagStyle}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/icon-r.png" alt="running" style={iconStyle} />
          <span style={activeTextStyle}>{status}</span>
        </div>
      </div>
    </div>
  );
};

export default TaglineSection;

