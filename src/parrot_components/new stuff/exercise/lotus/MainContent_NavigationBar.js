import React from 'react';

const MainContent_NavigationBar = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '375px',
    minHeight: '480px',
    backgroundColor: 'inherit',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
  };

  const playButtonStyle = {
    width: '65px',
    height: '65px',
    cursor: 'pointer',
    position: 'relative',
    top: '-32px',
    backgroundColor: 'transparent',
    border: 'none',
  };

  const statsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '20px',
  };

  const statItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '109px',
  };

  const contentStyle = {
    width: '100%',
    padding: '0 24px',
    boxSizing: 'border-box',
  };

  const titleContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  };

  const navigationBarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '322px',
    padding: '13px 46px',
    backgroundColor: '#fff',
    marginTop: 'auto',
    boxSizing: 'border-box',
  };

  const navIconStyle = {
    width: '25px',
    height: '25px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z58xow58MnUDluQX/rectangl.png" 
        alt="Meditation" 
        style={imageStyle}
      />
      
      <button style={playButtonStyle}>
        <img src="https://dashboard.codeparrot.ai/api/image/Z58xow58MnUDluQX/button.png" alt="Play" width="65" height="65" />
      </button>

      <div style={statsContainerStyle}>
        <div style={statItemStyle}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z58xow58MnUDluQX/icon-4.png" alt="Last 7 days" width="24" height="24" />
          <span style={{fontFamily: 'DM Sans', fontWeight: 700, fontSize: '14px'}}>56 Kcal</span>
          <span style={{fontFamily: 'DM Sans', fontWeight: 500, fontSize: '14px', opacity: 0.6}}>Last 7 days</span>
        </div>
        <div style={statItemStyle}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z58xow58MnUDluQX/icon-3.png" alt="All Time" width="24" height="24" />
          <span style={{fontFamily: 'DM Sans', fontWeight: 700, fontSize: '14px'}}>2.2k Kcal</span>
          <span style={{fontFamily: 'DM Sans', fontWeight: 500, fontSize: '14px', opacity: 0.6}}>All Time</span>
        </div>
        <div style={statItemStyle}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z58xow58MnUDluQX/icon-2.png" alt="Average" width="24" height="24" />
          <span style={{fontFamily: 'DM Sans', fontWeight: 700, fontSize: '14px'}}>6 Kcal</span>
          <span style={{fontFamily: 'DM Sans', fontWeight: 500, fontSize: '14px', opacity: 0.6}}>Average</span>
        </div>
      </div>

      <div style={contentStyle}>
        <div style={titleContainerStyle}>
          <h2 style={{
            fontFamily: 'DM Sans',
            fontWeight: 700,
            fontSize: '18px',
            margin: 0
          }}>Lotus Pose (Padmasana)</h2>
          <img src="https://dashboard.codeparrot.ai/api/image/Z58xow58MnUDluQX/icon.png" alt="Info" width="24" height="24" />
        </div>
        <p style={{
          fontFamily: 'DM Sans',
          fontSize: '14px',
          lineHeight: '23.5px',
          color: '#7f7f7f',
          margin: 0
        }}>
          "I am calm, centered, and deeply connected to my inner peace."
          <br /><br />
          This pose improves focus, strengthens your legs, and builds inner confidence. Root yourself to the ground, lift your heart, and embrace your power. Perfect for enhancing stability and grace—just like you!
        </p>
      </div>

      <div style={navigationBarStyle}>
        <img src="https://dashboard.codeparrot.ai/api/image/Z58xow58MnUDluQX/home.png" alt="Home" style={navIconStyle} />
        <img src="https://dashboard.codeparrot.ai/api/image/Z58xow58MnUDluQX/exercise.png" alt="Exercise" style={navIconStyle} />
        <img src="https://dashboard.codeparrot.ai/api/image/Z58xow58MnUDluQX/people-i.png" alt="People" style={{...navIconStyle, width: '20px'}} />
        <img src="https://dashboard.codeparrot.ai/api/image/Z58xow58MnUDluQX/settings.png" alt="Settings" style={navIconStyle} />
      </div>
    </div>
  );
};

export default MainContent_NavigationBar;

