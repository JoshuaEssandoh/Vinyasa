import React from 'react';


const WorkoutItem2 = () => {
  return (
    <div style={{
      width: '100%',
      maxWidth: '327px',
      height: '234px',
      backgroundColor: '#f0f0f0',
      borderRadius: '24px',
      marginBottom: '16px',
      padding: '16px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      {/* Title Section */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <WorkoutIcon style={{
            width: '56px',
            height: '56px',
            marginRight: '16px'
          }} />
          <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <span style={{
              color: '#000000',
              fontFamily: 'DM Sans',
              fontSize: '16px',
              fontWeight: 700,
              lineHeight: '26px'
            }}>Indoor Cycle</span>
            <span style={{
              color: '#040415',
              fontFamily: 'DM Sans',
              fontSize: '16px',
              fontWeight: 700,
              lineHeight: '26px'
            }}>00:45:21</span>
          </div>
        </div>
        <MoreIcon style={{
          width: '24px',
          height: '24px',
          cursor: 'pointer'
        }} />
      </div>

      {/* Graph Section */}
      <div style={{
        width: '100%',
        height: '114px'
      }}>
        <div style={{
          height: '82px',
          marginBottom: '8px'
        }}>
          <ChartImage style={{
            width: '100%',
            height: '100%'
          }} />
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#7F7F7F',
          fontFamily: 'DM Sans',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '24px'
        }}>
          <span>1</span>
          <span>6</span>
          <span>12</span>
          <span>18</span>
          <span>24</span>
        </div>
      </div>
    </div>
  );
};

export default WorkoutItem2;
