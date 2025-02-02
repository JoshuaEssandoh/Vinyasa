import React from 'react';

const InformationSection = ({ style }) => {
  const containerStyle = {
    width: '100%',
    maxWidth: '327px',
    minHeight: '232px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px',
    boxSizing: 'border-box',
    ...style,
  };

  const titleContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  };

  const titleStyle = {
    fontFamily: 'DM Sans',
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '28px',
    color: '#040415',
    margin: 0,
  };

  const iconStyle = {
    width: '24px',
    height: '24px',
    cursor: 'pointer',
  };

  const descriptionStyle = {
    fontFamily: 'DM Sans',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '23.5px',
    color: '#7F7F7F',
    margin: 0,
  };

  return (
    <div style={containerStyle}>
      <div style={titleContainerStyle}>
        <h2 style={titleStyle}>Tree Pose (Vrikshasana)</h2>
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z58xQQ58MnUDluQW/icon.png" 
          alt="Information icon" 
          style={iconStyle}
          onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
        />
      </div>
      <p style={descriptionStyle}>
        "I am rooted in strength and rise with confidence, unwavering in my purpose."
        <br /><br />
        This pose improves focus, strengthens your legs, and builds inner confidence. Root yourself to the ground, lift your heart, and embrace your power. Perfect for enhancing stability and grace—just like you!
      </p>
    </div>
  );
};

InformationSection.defaultProps = {
  style: {},
};

export default InformationSection;

