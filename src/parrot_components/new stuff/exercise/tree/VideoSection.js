import React from 'react';

const VideoSection = ({ style }) => {
  const defaultStyle = {
    width: '100%',
    maxWidth: '491px', // From Figma width
    minWidth: '320px', // Reasonable min-width for mobile
    height: '350px', // From Figma height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    margin: '0 auto',
    overflow: 'hidden',
  };

  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <div style={{ ...defaultStyle, ...style }}>
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z58xQQ58MnUDluQW/tree-pos.png"
        alt="Tree Pose Video"
        style={videoStyle}
      />
    </div>
  );
};

VideoSection.defaultProps = {
  style: {},
};

export default VideoSection;

