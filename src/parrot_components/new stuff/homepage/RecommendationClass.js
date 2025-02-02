import React from 'react';

const RecommendationClass = ({ title = 'Flow Yoga', instructor = 'With HackViolet', imageUrl = 'https://dashboard.codeparrot.ai/api/image/Z58t2Q58MnUDluQU/frame-4.png', iconUrl = 'https://dashboard.codeparrot.ai/api/image/Z58t2Q58MnUDluQU/icon.png' }) => {
  return (
    <div style={{ width: '100%', maxWidth: '374px', padding: '10px 0' }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '10px'
      }}>
        <h2 style={{ 
          margin: 0,
          fontSize: '18px',
          fontWeight: 700,
          fontFamily: 'Inter, sans-serif',
          color: '#2b2b2b'
        }}>
          Recommendation Class
        </h2>
        <button 
          style={{ 
            background: 'none',
            border: 'none',
            color: '#ff6079',
            fontSize: '15px',
            fontWeight: 600,
            fontFamily: 'Inter, sans-serif',
            cursor: 'pointer',
            padding: 0
          }}
          onClick={() => console.log('See all clicked')}
        >
          See all
        </button>
      </div>

      {/* Card */}
      <div style={{
        width: '100%',
        height: '80px',
        backgroundColor: '#f1f3fa',
        borderRadius: '15px',
        display: 'flex',
        alignItems: 'center',
        padding: '6px'
      }}>
        {/* Image */}
        <img 
          src={imageUrl}
          alt={title}
          style={{
            width: '101px',
            height: '68px',
            borderRadius: '12px',
            objectFit: 'cover'
          }}
        />

        {/* Text Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          marginLeft: '10px'
        }}>
          <span style={{
            fontSize: '16px',
            fontWeight: 700,
            fontFamily: 'Inter, sans-serif',
            color: '#003a4d'
          }}>
            {title}
          </span>
          <span style={{
            fontSize: '13px',
            fontWeight: 500,
            fontFamily: 'Inter, sans-serif',
            color: '#004d66',
            opacity: 0.6
          }}>
            {instructor}
          </span>
        </div>

        {/* Icon */}
        <img 
          src={iconUrl}
          alt="icon"
          style={{
            width: '28px',
            height: '28px',
            marginLeft: 'auto',
            cursor: 'pointer'
          }}
          onClick={() => console.log('Icon clicked')}
        />
      </div>
    </div>
  );
};

export default RecommendationClass;

