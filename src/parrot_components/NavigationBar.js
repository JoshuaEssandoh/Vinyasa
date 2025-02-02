import React from 'react';

const NavigationBar = ({ style }) => {
  const navStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '13px 46px',
    backgroundColor: '#ffffff',
    minWidth: '322px',
    height: '51px',
    width: '100%',
    boxSizing: 'border-box',
    ...style
  };

  const iconStyle = {
    width: '25px',
    height: '25px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  };

  const peopleIconStyle = {
    ...iconStyle,
    width: '20px',
  };

  const handleIconHover = (e) => {
    e.currentTarget.style.transform = 'scale(1.1)';
  };

  const handleIconLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <nav style={navStyle}>
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z57eQzRi7Jes38uu/home.png"
        alt="Home"
        style={iconStyle}
        onMouseEnter={handleIconHover}
        onMouseLeave={handleIconLeave}
        onClick={() => console.log('Home clicked')}
      />
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z57eQzRi7Jes38uu/exercise.png"
        alt="Exercise"
        style={iconStyle}
        onMouseEnter={handleIconHover}
        onMouseLeave={handleIconLeave}
        onClick={() => console.log('Exercise clicked')}
      />
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z57eQzRi7Jes38uu/people-i.png"
        alt="People"
        style={peopleIconStyle}
        onMouseEnter={handleIconHover}
        onMouseLeave={handleIconLeave}
        onClick={() => console.log('People clicked')}
      />
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z57eQzRi7Jes38uu/settings.png"
        alt="Settings"
        style={iconStyle}
        onMouseEnter={handleIconHover}
        onMouseLeave={handleIconLeave}
        onClick={() => console.log('Settings clicked')}
      />
    </nav>
  );
};

NavigationBar.defaultProps = {
  style: {}
};

export default NavigationBar;