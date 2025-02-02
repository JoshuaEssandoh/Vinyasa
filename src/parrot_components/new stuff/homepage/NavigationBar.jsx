import React from 'react';

const NavigationBar = () => {
  const navStyle = {
    width: '100%',
    minHeight: '51px',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '13px 46px',
    boxSizing: 'border-box',
    borderTop: '1px solid #f0f0f0',
  };

  const iconStyle = {
    width: '25px',
    height: '25px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  };

  const peopleIconStyle = {
    ...iconStyle,
    width: '20px',  // Specific width for people icon
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
        src="https://dashboard.codeparrot.ai/api/image/Z58t2Q58MnUDluQU/home.png" 
        alt="Home" 
        style={iconStyle}
        onMouseEnter={handleIconHover}
        onMouseLeave={handleIconLeave}
      />
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z58t2Q58MnUDluQU/exercise.png" 
        alt="Exercise" 
        style={iconStyle}
        onMouseEnter={handleIconHover}
        onMouseLeave={handleIconLeave}
      />
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z58t2Q58MnUDluQU/people-i.png" 
        alt="People" 
        style={peopleIconStyle}
        onMouseEnter={handleIconHover}
        onMouseLeave={handleIconLeave}
      />
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z58t2Q58MnUDluQU/settings.png" 
        alt="Settings" 
        style={iconStyle}
        onMouseEnter={handleIconHover}
        onMouseLeave={handleIconLeave}
      />
    </nav>
  );
};

export default NavigationBar;

