import React from 'react';

const Button = ({ style, onClick }) => {
  const defaultStyle = {
    width: '65px',
    height: '65px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '50%',
    backgroundColor: '#FF6B6B',
    transition: 'transform 0.2s ease-in-out',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      style={{
        ...defaultStyle,
        ...style,
      }}
      onClick={handleClick}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z58xRDRi7Jes38vN/button.png" 
        alt="Play"
        style={{
          width: '24px',
          height: '24px',
        }}
      />
    </button>
  );
};

Button.defaultProps = {
  style: {},
  onClick: () => {},
};

export default Button;

