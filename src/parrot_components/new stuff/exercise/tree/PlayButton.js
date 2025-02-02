import React from 'react';

const PlayButton = ({ onClick, style }) => {
  const defaultStyle = {
    width: '65px',
    height: '65px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    background: 'linear-gradient(180deg, #FF7A7A 0%, #FF4D4D 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    transition: 'transform 0.2s ease-in-out',
  };

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.1)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ ...defaultStyle, ...style }}
    >
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z58xQQ58MnUDluQW/button.png"
        alt="Play"
        style={{
          width: '50%',
          height: '50%',
          objectFit: 'contain'
        }}
      />
    </button>
  );
};

PlayButton.defaultProps = {
  onClick: () => {},
  style: {}
};

export default PlayButton;

