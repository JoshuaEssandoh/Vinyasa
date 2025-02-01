import React from 'react';

const CoverPage = () => {
  const styles = {
    container: {
      width: '375px',
      minHeight: '812px',
      backgroundColor: '#ff6079',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      fontFamily: 'DM Sans',
      fontSize: '48px',
      fontWeight: 700,
      color: '#ffffff',
      letterSpacing: '-2px',
      lineHeight: '34px',
      textAlign: 'center',
      marginTop: '160px',
      width: '350px',
    },
    subtitle: {
      fontFamily: 'Poppins',
      fontSize: '12px',
      fontWeight: 400,
      color: '#ffffff',
      lineHeight: '24px',
      textAlign: 'center',
      marginTop: '10px',
      width: '326px',
    },
    nextButton: {
      width: '111px',
      height: '46px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '60px',
      cursor: 'pointer',
      border: 'none',
      transition: 'transform 0.2s ease',
    },
    nextText: {
      fontFamily: 'Poppins',
      fontSize: '17px',
      fontWeight: 600,
      color: '#414141',
      lineHeight: '26px',
    },
    illustration: {
      position: 'absolute',
      width: '1024px',
      height: '1001px',
      left: '-276px',
      top: '-95px',
      zIndex: 0,
      pointerEvents: 'none',
    },
    group: {
      position: 'absolute',
      width: '220px',
      height: '220px',
      right: '-83px',
      top: '-97px',
      zIndex: 1,
      pointerEvents: 'none',
    },
    maskGroup: {
      position: 'absolute',
      width: '498px',
      height: '498px',
      left: '-61px',
      top: '338px',
      zIndex: 2,
      pointerEvents: 'none',
    },
  };

  const handleNextClick = () => {
    // Handle next button click
    console.log('Next clicked');
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div style={styles.container}>
      <img src="https://dashboard.codeparrot.ai/api/image/Z56O7zRi7Jes38uP/illustra.png" style={styles.illustration} alt="" />
      <img src="https://dashboard.codeparrot.ai/api/image/Z56O7zRi7Jes38uP/group.png" style={styles.group} alt="" />
      <img src="https://dashboard.codeparrot.ai/api/image/Z56O7zRi7Jes38uP/mask-gro.png" style={styles.maskGroup} alt="" />
      
      <h1 style={styles.title}>vinyasa</h1>
      <p style={styles.subtitle}>your personal yoga studio!</p>
      
      <button 
        style={styles.nextButton}
        onClick={handleNextClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <span style={styles.nextText}>next</span>
      </button>
    </div>
  );
};

export default CoverPage;

