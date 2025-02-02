import React from 'react';

const MainImage = ({ style = {} }) => {
  const defaultStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '491px',
    minWidth: '320px',
    height: 'auto',
    aspectRatio: '491/369',
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <div style={{ ...defaultStyle, ...style }}>
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z58xRDRi7Jes38vN/main-ima.png"
        alt="Exercise demonstration"
        style={imageStyle}
      />
    </div>
  );
};

export default MainImage;

