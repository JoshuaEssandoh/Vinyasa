import React from 'react';

const Header = ({ style }) => {
  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    height: '56px',
    minWidth: '366px',
    backgroundColor: '#fff',
    ...style
  };

  const titleStyles = {
    fontFamily: 'DM Sans',
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '26px',
    color: '#040415',
    textAlign: 'center',
    flex: 1
  };

  const iconStyles = {
    width: '56px',
    height: '56px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'opacity 0.2s ease'
  };

  const imageStyles = {
    width: '24px',
    height: '24px',
    objectFit: 'contain'
  };

  return (
    <header style={headerStyles}>
      <div style={iconStyles}>
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z58xRDRi7Jes38vN/arrow.png" 
          alt="Back" 
          style={imageStyles}
        />
      </div>
      <h1 style={titleStyles}>Monday</h1>
      <div style={iconStyles}>
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z58xRDRi7Jes38vN/more.png" 
          alt="More options" 
          style={imageStyles}
        />
      </div>
    </header>
  );
};

Header.defaultProps = {
  style: {}
};

export default Header;

