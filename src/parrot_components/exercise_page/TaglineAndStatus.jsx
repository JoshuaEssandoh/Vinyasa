import React from 'react';

const TaglineAndStatus = ({ style }) => {
  return (
    <div style={{ 
      ...style,
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      backgroundColor: 'inherit',
      minWidth: '320px',
      maxWidth: '100%',
      boxSizing: 'border-box'
    }}>
      {/* Tagline Section */}
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ 
          fontSize: '24px',
          fontWeight: 800,
          fontFamily: 'Inter, sans-serif',
          color: '#2b2b2b',
          margin: '0 0 10px 0'
        }}>
          Monday
        </h1>
        <p style={{ 
          fontSize: '16px',
          fontWeight: 400,
          fontFamily: 'Inter, sans-serif',
          color: '#c4c4c4',
          lineHeight: '21px',
          margin: 0,
          maxWidth: '373px'
        }}>
          Warm up properly before exercising to prevent injury and make your workouts more effective.
        </p>
      </div>

      {/* Status and Duration Section */}
      <div style={{ 
        display: 'flex',
        flexDirection: 'row',
        gap: '16px',
        marginBottom: '20px',
        flexWrap: 'wrap'
      }}>
        {/* Duration Badge */}
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          padding: '8px 16px',
          backgroundColor: '#dcf1fe',
          borderRadius: '5px',
          gap: '14px',
          flex: '1 1 auto',
          minWidth: '120px'
        }}>
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z56bZg58MnUDluPi/icon-c.png" 
            alt="clock" 
            style={{ width: '16px', height: '16px' }}
          />
          <span style={{ 
            fontSize: '15.71px',
            fontWeight: 700,
            fontFamily: 'Inter, sans-serif',
            color: '#12bef6'
          }}>
            10.00 mins
          </span>
        </div>

        {/* Status Badge */}
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          padding: '8px 16px',
          backgroundColor: '#f8e1d2',
          borderRadius: '5px',
          gap: '14px',
          flex: '1 1 auto',
          minWidth: '120px'
        }}>
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z56bZg58MnUDluPi/icon-r.png" 
            alt="running" 
            style={{ width: '16px', height: '16px' }}
          />
          <span style={{ 
            fontSize: '15.71px',
            fontWeight: 700,
            fontFamily: 'Inter, sans-serif',
            color: '#fa7b34'
          }}>
            Active
          </span>
        </div>
      </div>

      {/* Exercises Header */}
      <h2 style={{ 
        fontSize: '20px',
        fontWeight: 700,
        fontFamily: 'Inter, sans-serif',
        color: '#2b2b2b',
        margin: 0
      }}>
        Exercises
      </h2>
    </div>
  );
};

TaglineAndStatus.defaultProps = {
  style: {}
};

export default TaglineAndStatus;

