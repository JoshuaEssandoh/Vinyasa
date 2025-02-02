import React from 'react';

const Header = ({ title = 'Monday' }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      minWidth: '366px',
      height: '56px',
      padding: '0 20px',
      backgroundColor: '#fff'
    }}>
      <button 
        style={{
          width: '56px',
          height: '56px',
          padding: '16px',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={() => window.history.back()}
      >
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z58xow58MnUDluQX/arrow.png" 
          alt="Back"
          style={{
            width: '24px',
            height: '24px'
          }}
        />
      </button>

      <h1 style={{
        margin: 0,
        fontFamily: 'DM Sans',
        fontSize: '16px',
        fontWeight: 700,
        lineHeight: '26px',
        color: '#040415',
        textAlign: 'center',
        flex: 1
      }}>
        {title}
      </h1>

      <button 
        style={{
          width: '56px',
          height: '56px',
          padding: '16px',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={() => {}}
      >
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z58xow58MnUDluQX/more.png" 
          alt="More options"
          style={{
            width: '24px',
            height: '24px'
          }}
        />
      </button>
    </div>
  );
};

export default Header;

