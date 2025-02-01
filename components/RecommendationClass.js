import React from 'react';

const RecommendationClass = ({ style }) => {
  const defaultStyle = {
    width: '100%',
    minWidth: '374px',
    height: '112px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    ...style
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const titleStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '18px',
    fontWeight: 700,
    color: '#2B2B2B',
    margin: 0,
  };

  const seeAllStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '15px',
    fontWeight: 600,
    color: '#FF6079',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  const cardStyle = {
    width: '100%',
    height: '80px',
    backgroundColor: '#F1F3FA',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    padding: '6px',
  };

  const imageStyle = {
    width: '101px',
    height: '68px',
    borderRadius: '12px',
    objectFit: 'cover',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    marginLeft: '10px',
    flex: 1,
  };

  const classNameStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    fontWeight: 700,
    color: '#003A4D',
    margin: 0,
  };

  const instructorStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '13px',
    fontWeight: 500,
    color: '#004D66',
    opacity: 0.6,
    margin: 0,
  };

  const iconStyle = {
    width: '28px',
    height: '28px',
    cursor: 'pointer',
    marginRight: '6px',
  };

  return (
    <div style={defaultStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Recommendation Class</h2>
        <a href="#" style={seeAllStyle}>See all</a>
      </div>
      <div style={cardStyle}>
        <img src="https://dashboard.codeparrot.ai/api/image/Z552Cw58MnUDluPX/frame-4.png" alt="Flow Yoga" style={imageStyle} />
        <div style={contentStyle}>
          <h3 style={classNameStyle}>Flow Yoga</h3>
          <p style={instructorStyle}>With HackViolet</p>
        </div>
        <img src="https://dashboard.codeparrot.ai/api/image/Z552Cw58MnUDluPX/icon.png" alt="icon" style={iconStyle} />
      </div>
    </div>
  );
};

RecommendationClass.defaultProps = {
  style: {}
};

export default RecommendationClass;

