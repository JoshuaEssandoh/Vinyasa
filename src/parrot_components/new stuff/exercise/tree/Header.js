import React from 'react';

const Header = ({ title = 'Monday' }) => {
  const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    minWidth: '366px',
    height: '56px',
    padding: '0 20px',
    backgroundColor: '#fff'
  };

  const buttonStyles = {
    width: '56px',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0'
  };

  const titleStyles = {
    fontFamily: 'DM Sans',
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '26px',
    color: '#040415',
    textAlign: 'center',
    margin: '0'
  };

  const imageStyles = {
    width: '24px',
    height: '24px'
  };

  return (
    <header style={headerStyles}>
      <button 
        style={buttonStyles}
        onClick={() => window.history.back()}
      >
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z58xQQ58MnUDluQW/arrow.png" 
          alt="Back" 
          style={imageStyles}
        />
      </button>
      
      <h1 style={titleStyles}>{title}</h1>
      
      <button 
        style={buttonStyles}
        onClick={() => console.log('More options clicked')}
      >
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z58xQQ58MnUDluQW/more.png" 
          alt="More options" 
          style={imageStyles}
        />
      </button>
    </header>
  );
};

export default Header;

