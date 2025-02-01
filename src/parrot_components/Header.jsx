import React from 'react';

const Header = ({ style }) => {
  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    minWidth: '320px',
    width: '100%',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
    ...style,
  };

  const menuIconStyles = {
    width: '20px',
    height: '14px',
    cursor: 'pointer',
  };

  const greetingStyles = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    fontWeight: 500,
    color: '#2b2b2b',
    marginLeft: '10px',
    flexGrow: 1,
    textAlign: 'center',
  };

  const avatarStyles = {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    objectFit: 'cover',
    cursor: 'pointer',
  };

  const handleMenuClick = () => {
    // Handle menu click
    console.log('Menu clicked');
  };

  const handleAvatarClick = () => {
    // Handle avatar click
    console.log('Avatar clicked');
  };

  return (
    <header style={headerStyles}>
      <img
        src="https://dashboard.codeparrot.ai/api/image/Z552Cw58MnUDluPX/menu-ico.png"
        alt="Menu"
        style={menuIconStyles}
        onClick={handleMenuClick}
      />
      <span style={greetingStyles}>Hello, Zen Violet</span>
      <img
        src="https://dashboard.codeparrot.ai/api/image/Z552Cw58MnUDluPX/avatar.png"
        alt="User avatar"
        style={avatarStyles}
        onClick={handleAvatarClick}
      />
    </header>
  );
};

Header.defaultProps = {
  style: {},
};

export default Header;

