import React from 'react';

const TodayActivityCard = ({ activityTime = '8:00 AM - 1:30 PM', activityTitle = "Today's activity" }) => {
  return (
    <div style={{
      width: '100%',
      maxWidth: '374px',
      height: '180px',
      backgroundColor: '#ad42533d',
      borderRadius: '15px',
      padding: '28px 26px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      margin: '0 auto'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <h2 style={{
          fontFamily: 'Nunito, sans-serif',
          fontSize: '30px',
          fontWeight: 800,
          lineHeight: '117.9%',
          color: '#2B2B2B',
          margin: 0
        }}>
          {activityTitle}
        </h2>
        <div style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '15px',
          fontWeight: 700,
          color: '#7F7F7F',
          marginTop: '10px'
        }}>
          {activityTime}
        </div>
      </div>

      <div style={{
        width: '142px',
        height: '142px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z58t2Q58MnUDluQU/jogging.png"
          alt="Jogging"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>
    </div>
  );
};

export default TodayActivityCard;

