import React from 'react';

const Header = ({ style = {} }) => {
  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    minWidth: '320px',
    width: '100%',
    height: '350px',
    position: 'relative',
    backgroundColor: 'inherit',
    boxSizing: 'border-box',
    ...style
  };

  const mainImageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px'
  };

  const menuButtonStyles = {
    background: 'none',
    border: 'none',
    padding: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.2s'
  };

  const menuIconStyles = {
    width: '24px',
    height: '24px'
  };

  const handleMenuClick = () => {
    // Handle menu click event
    console.log('Menu clicked');
  };

  return (
    <header style={headerStyles}>
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z56bZg58MnUDluPi/main-ima.png" 
        alt="Exercise" 
        style={mainImageStyles}
      />
      <button 
        onClick={handleMenuClick}
        style={menuButtonStyles}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
      >
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z56bZg58MnUDluPi/menu.png" 
          alt="Menu" 
          style={menuIconStyles}
        />
      </button>
    </header>
  );
};

export default Header;

