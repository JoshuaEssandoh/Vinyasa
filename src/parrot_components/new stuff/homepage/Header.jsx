import React from 'react';

const Header = ({ greeting = 'Hello, Josephine Jetta!', avatarUrl = 'https://dashboard.codeparrot.ai/api/image/Z58t2Q58MnUDluQU/avatar.png' }) => {
  return (
    <div style={{
      width: '100%',
      minWidth: '374px',
      height: '36px',
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#ffffff'
    }}>
      {/* Menu Icon */}
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
          src="https://dashboard.codeparrot.ai/api/image/Z58t2Q58MnUDluQU/menu-ico.png" 
          alt="Menu"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </button>

      {/* Greeting Text */}
      <div style={{
        color: '#2B2B2B',
        fontFamily: 'Inter, sans-serif',
        fontSize: '14px',
        fontWeight: 500,
        flex: 1,
        textAlign: 'center'
      }}>
        {greeting}
      </div>

      {/* Avatar */}
      <button
        style={{
          width: '36px',
          height: '36px',
          border: 'none',
          background: 'transparent',
          padding: 0,
          cursor: 'pointer',
        }}
        onClick={() => console.log('Avatar clicked')}
      >
        <img 
          src={avatarUrl}
          alt="User avatar"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%'
          }}
        />
      </button>
    </div>
  );
};

export default Header;

