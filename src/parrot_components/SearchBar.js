import React from 'react';

const SearchBar = ({ style }) => {
  return (
    <div 
      style={{
        padding: '0 20px',
        width: '100%',
        maxWidth: '374px',
        height: '50px',
        ...style
      }}
    >
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: '50px',
          backgroundColor: '#f5f5f5',
          borderRadius: '15px',
          padding: '0 20px',
        }}
      >
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z57eQzRi7Jes38uu/search-i.png"
          alt="search"
          style={{
            width: '16px',
            height: '16px',
            marginRight: '16px'
          }}
        />
        <input
          type="text"
          placeholder="Search"
          style={{
            border: 'none',
            background: 'transparent',
            outline: 'none',
            width: '100%',
            fontFamily: 'Nunito',
            fontSize: '16px',
            fontWeight: 400,
            color: '#c4c4c4',
          }}
        />
      </div>
    </div>
  );
};

SearchBar.defaultProps = {
  style: {}
};

export default SearchBar;