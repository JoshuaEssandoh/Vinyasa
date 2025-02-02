import React from 'react';

const CoverPage = () => {
  const containerStyle = {
    width: '410px',
    minHeight: '896px',
    background: 'linear-gradient(0deg, rgba(175,59,77,1) 0%, rgba(255,188,198,1) 100%)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
  };

  const titleStyle = {
    fontFamily: 'DM Sans',
    fontWeight: 700,
    fontSize: '64px',
    letterSpacing: '-2px',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: '34px',
    marginTop: '189px',
    width: '350px',
  };

  const subtitleStyle = {
    fontFamily: 'Poppins',
    fontWeight: 400,
    fontSize: '16px',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: '24px',
    marginTop: '24px',
  };

  const buttonContainerStyle = {
    width: '156px',
    height: '50.76px',
    position: 'relative',
    marginTop: '56px',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  };

  const buttonBackgroundStyle = {
    width: '121.36px',
    height: '50.76px',
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  };

  const buttonTextStyle = {
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: '17px',
    color: '#414141',
    textAlign: 'center',
    lineHeight: '26px',
    position: 'absolute',
    width: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
  };

  const illustrationStyle = {
    position: 'absolute',
    width: '1024px',
    height: '1001px',
    left: '-276px',
    top: '-95px',
    zIndex: 0,
  };

  const groupStyle = {
    position: 'absolute',
    width: '220px',
    height: '220px',
    right: '-48px',
    top: '-97px',
    zIndex: 1,
  };

  const maskGroupStyle = {
    position: 'absolute',
    width: '562px',
    height: '604px',
    left: '-77px',
    bottom: '-75px',
    zIndex: 2,
  };

  const handleButtonHover = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleButtonLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div style={containerStyle}>
      <img src="https://dashboard.codeparrot.ai/api/image/Z58spzRi7Jes38vJ/illustra.png" style={illustrationStyle} alt="Background illustration" />
      <img src="https://dashboard.codeparrot.ai/api/image/Z58spzRi7Jes38vJ/group.png" style={groupStyle} alt="Decorative group" />
      
      <h1 style={titleStyle}>vinyasa</h1>
      <p style={subtitleStyle}>your personal yoga studio!</p>
      
      <div 
        style={buttonContainerStyle}
        onMouseEnter={handleButtonHover}
        onMouseLeave={handleButtonLeave}
        onClick={() => console.log('Next clicked')}
      >
        <div style={buttonBackgroundStyle}></div>
        <div style={buttonTextStyle}>next</div>
      </div>

      <img src="https://dashboard.codeparrot.ai/api/image/Z58spzRi7Jes38vJ/mask-gro.png" style={maskGroupStyle} alt="Yoga illustration" />
    </div>
  );
};

export default CoverPage;

