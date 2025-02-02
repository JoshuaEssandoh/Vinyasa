import React from 'react';
import { ReactComponent as HomeIcon } from './home.png';
import { ReactComponent as ExerciseIcon } from './exercise.png';
import { ReactComponent as PeopleIcon } from './people-i.png';
import { ReactComponent as SettingsIcon } from './settings.png';

const NavigationBar = () => {
  const iconStyle = {
    width: '25px',
    height: '25px',
    cursor: 'pointer',
    transition: 'opacity 0.2s ease',
  };

  const handleIconHover = (e) => {
    e.currentTarget.style.opacity = '0.7';
  };

  const handleIconLeave = (e) => {
    e.currentTarget.style.opacity = '1';
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      minWidth: '322px',
      height: '51px',
      padding: '13px 46px',
      backgroundColor: '#ffffff',
      boxSizing: 'border-box',
      flexWrap: 'wrap'
    }}>
      <div 
        style={iconStyle}
        onMouseEnter={handleIconHover}
        onMouseLeave={handleIconLeave}
      >
        <HomeIcon />
      </div>
      <div 
        style={iconStyle}
        onMouseEnter={handleIconHover}
        onMouseLeave={handleIconLeave}
      >
        <ExerciseIcon />
      </div>
      <div 
        style={{...iconStyle, width: '20px'}}
        onMouseEnter={handleIconHover}
        onMouseLeave={handleIconLeave}
      >
        <PeopleIcon />
      </div>
      <div 
        style={iconStyle}
        onMouseEnter={handleIconHover}
        onMouseLeave={handleIconLeave}
      >
        <SettingsIcon />
      </div>
    </div>
  );
};

export default NavigationBar;
