import React from 'react';

const Header = ({ style }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
      minWidth: '374px',
      height: '36px',
      backgroundColor: '#ffffff',
      ...style
    }}>
      <button 
        style={{
          width: '20px',
          height: '14px',
          border: 'none',
          background: 'transparent',
          padding: 0,
          cursor: 'pointer',
        }}
        onClick={() => console.log('Menu clicked')}
      >
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z57eQzRi7Jes38uu/menu-ico.png" 
          alt="Menu"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </button>

      <span style={{
        color: '#2B2B2B',
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '17px',
        marginLeft: '10px'
      }}>
        Hello, Josephine Jetta!
      </span>

      <div style={{
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        overflow: 'hidden',
        marginLeft: 'auto'
      }}>
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z57eQzRi7Jes38uu/avatar.png"
          alt="User avatar"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
    </div>
  );
};

Header.defaultProps = {
  style: {}
};

export default Header;