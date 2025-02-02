import React from 'react';

const RecommendationClass = ({ style }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxWidth: '374px',
      minWidth: '300px',
      height: '112px',
      padding: '0',
      ...style
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
        padding: '0 10px'
      }}>
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '18px',
          fontWeight: 700,
          color: '#2B2B2B'
        }}>
          Recommendation Class
        </span>
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '15px',
          fontWeight: 600,
          color: '#FF6079',
          cursor: 'pointer'
        }}>
          See all
        </span>
      </div>

      {/* Card */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '80px',
        backgroundColor: '#F1F3FA',
        borderRadius: '15px',
        padding: '6px',
        boxSizing: 'border-box'
      }}>
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z57eQzRi7Jes38uu/frame-4.png"
          alt="Flow Yoga"
          style={{
            width: '101px',
            height: '68px',
            borderRadius: '12px',
            objectFit: 'cover'
          }}
        />
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          marginLeft: '10px',
          flexGrow: 1
        }}>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            fontWeight: 700,
            color: '#003A4D'
          }}>
            Flow Yoga
          </span>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            fontWeight: 500,
            color: '#004D66',
            opacity: 0.6
          }}>
            With HackViolet
          </span>
        </div>

        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z57eQzRi7Jes38uu/icon.png"
          alt="icon"
          style={{
            width: '28px',
            height: '28px',
            marginLeft: 'auto',
            cursor: 'pointer'
          }}
        />
      </div>
    </div>
  );
};

RecommendationClass.defaultProps = {
  style: {}
};

export default RecommendationClass;
