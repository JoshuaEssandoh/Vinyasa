import React from 'react';

const NavigationBar = ({ style }) => {
  const baseStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '13px 46px',
    backgroundColor: '#fff',
    minWidth: '322px',
    height: '51px',
    boxSizing: 'border-box',
  };

  const iconStyles = {
    width: '25px',
    height: '25px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  };

  const peopleIconStyles = {
    ...iconStyles,
    width: '20px',
  };

  const handleIconHover = (e) => {
    e.currentTarget.style.transform = 'scale(1.1)';
  };

  const handleIconLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div style={{ ...baseStyles, ...style }}>
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z58xQQ58MnUDluQW/home.png"
        alt="Home"
        style={iconStyles}
        onMouseEnter={handleIconHover}
        onMouseLeave={handleIconLeave}
        onClick={() => console.log('Home clicked')}
      />
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z58xQQ58MnUDluQW/exercise.png"
        alt="Exercise"
        style={iconStyles}
        onMouseEnter={handleIconHover}
        onMouseLeave={handleIconLeave}
        onClick={() => console.log('Exercise clicked')}
      />
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z58xQQ58MnUDluQW/people-i.png"
        alt="People"
        style={peopleIconStyles}
        onMouseEnter={handleIconHover}
        onMouseLeave={handleIconLeave}
        onClick={() => console.log('People clicked')}
      />
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z58xQQ58MnUDluQW/settings.png"
        alt="Settings"
        style={iconStyles}
        onMouseEnter={handleIconHover}
        onMouseLeave={handleIconLeave}
        onClick={() => console.log('Settings clicked')}
      />
    </div>
  );
};

NavigationBar.defaultProps = {
  style: {},
};

export default NavigationBar;

