import React from 'react';

const SearchBar = ({ placeholder = 'Search' }) => {
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
        margin: '10px auto'
      }}
    >
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z58t2Q58MnUDluQU/search-i.png"
        alt="Search Icon"
        style={{
          width: '16px',
          height: '16px',
          marginRight: '10px'
        }}
      />
      <input
        type="text"
        placeholder={placeholder}
        style={{
          background: 'transparent',
          border: 'none',
          outline: 'none',
          width: '100%',
          fontSize: '16px',
          fontFamily: 'Nunito, sans-serif',
          fontWeight: 400,
          color: '#c4c4c4'
        }}
      />
    </div>
  );
};

export default SearchBar;

