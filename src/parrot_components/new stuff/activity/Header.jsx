import React from 'react';
{/*import { ReactComponent as CloseIcon } from './close.png';
import { ReactComponent as MoreIcon } from './more.png';*/}

const Header = ({ date = 'Today, Feb 2' }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      minWidth: '327px',
      height: '56px',
      padding: '0 16px',
      boxSizing: 'border-box',
      backgroundColor: '#ffffff'
    }}>
      <button 
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          width: '56px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={() => {}}
      >
        <CloseIcon style={{ width: '24px', height: '24px' }} />
      </button>

      <span style={{ 
        fontSize: '16px', 
        fontWeight: '700',
        fontFamily: 'DM Sans',
        lineHeight: '26px',
        color: '#040415',
        textAlign: 'center'
      }}>
        {date}
      </span>

      <button 
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          width: '56px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={() => {}}
      >
        <MoreIcon style={{ width: '24px', height: '24px' }} />
      </button>
    </div>
  );
};

export default Header;

