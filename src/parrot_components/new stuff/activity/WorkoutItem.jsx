import React from 'react';

const WorkoutItem = ({ 
  title = "Running",
  duration = "2:10:08",
  backgroundColor = "#ff7187"
}) => {
  return (
    <div style={{
      width: '100%',
      maxWidth: '327px',
      height: '234px',
      backgroundColor: backgroundColor,
      borderRadius: '24px',
      padding: '16px',
      marginBottom: '16px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
      {/* Title Section */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px'
        }}>
          <div style={{
            width: '56px',
            height: '56px'
          }}>
            <WorkoutIcon />
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <span style={{
              color: '#7f7f7f',
              fontFamily: 'DM Sans',
              fontSize: '16px',
              fontWeight: 700,
              lineHeight: '26px'
            }}>{title}</span>
            <span style={{
              color: '#040415',
              fontFamily: 'DM Sans',
              fontSize: '16px',
              fontWeight: 700,
              lineHeight: '26px'
            }}>{duration}</span>
          </div>
        </div>
        <div style={{
          width: '24px',
          height: '24px',
          cursor: 'pointer'
        }}>
          <MoreIcon />
        </div>
      </div>

      {/* Graph Section */}
      <div style={{
        width: '100%',
        height: '114px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <div style={{
          width: '100%',
          height: '82px'
        }}>
          <ChartImage style={{ width: '100%', height: '100%' }} />
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 4px'
        }}>
          <span style={timeStyle}>1</span>
          <span style={timeStyle}>6</span>
          <span style={timeStyle}>12</span>
          <span style={timeStyle}>18</span>
          <span style={timeStyle}>24</span>
        </div>
      </div>
    </div>
  );
};

const timeStyle = {
  fontFamily: 'Alata',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '24px',
  color: '#7f7f7f'
};

export default WorkoutItem;

