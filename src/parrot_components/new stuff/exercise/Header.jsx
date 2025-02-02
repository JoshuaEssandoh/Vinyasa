import React from 'react';

const Header = () => {
  const headerStyles = {
    width: '100%',
    minWidth: '320px', // Minimum width to ensure content fits
    height: '350px', // Based on the main image height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '25px 20px', // Top padding from menu icon position
    backgroundColor: 'inherit',
    position: 'relative',
    overflow: 'hidden'
  };

  const mainImageStyles = {
    width: '100%', // Make responsive
    maxWidth: '491px', // From figma width
    height: 'auto',
    objectFit: 'cover',
    marginLeft: '-40px' // From figma left position
  };

  const menuIconStyles = {
    width: '9px', // From figma width
    height: '27px',
    cursor: 'pointer',
    transition: 'opacity 0.2s ease',
    position: 'absolute',
    top: '25px',
    right: '20px'
  };

  const handleMenuClick = () => {
    // Menu click handler
    console.log('Menu clicked');
  };

  const handleMenuHover = (e) => {
    e.currentTarget.style.opacity = '0.8';
  };

  const handleMenuLeave = (e) => {
    e.currentTarget.style.opacity = '1';
  };

  return (
    <header style={headerStyles}>
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/main-ima.png"
        alt="Main"
        style={mainImageStyles}
      />
      <img
        src="https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/menu.png"
        alt="Menu"
        style={menuIconStyles}
        onClick={handleMenuClick}
        onMouseEnter={handleMenuHover}
        onMouseLeave={handleMenuLeave}
      />
    </header>
  );
};

export default Header;

