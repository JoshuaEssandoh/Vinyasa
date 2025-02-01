import React from 'react';

const SearchBar = ({ style }) => {
  return (
    <div 
      style={{
        width: '100%',
        maxWidth: '374px',
        height: '50px',
        backgroundColor: '#f5f5f5',
        borderRadius: '15px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        boxSizing: 'border-box',
        ...style
      }}
    >
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z552Cw58MnUDluPX/search-i.png"
        alt="Search"
        style={{
          width: '16px',
          height: '16px',
          marginRight: '12px'
        }}
      />
      <input
        type="text"
        placeholder="Search"
        style={{
          background: 'transparent',
          border: 'none',
          outline: 'none',
          fontSize: '16px',
          fontFamily: 'Nunito, sans-serif',
          fontWeight: 400,
          color: '#c4c4c4',
          width: '100%',
          '::placeholder': {
            color: '#c4c4c4'
          }
        }}
      />
    </div>
  );
};

SearchBar.defaultProps = {
  style: {}
};

export default SearchBar;

