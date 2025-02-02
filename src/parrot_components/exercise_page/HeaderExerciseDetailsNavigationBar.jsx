import React from 'react';

const HeaderExerciseDetailsNavigationBar = () => {
  return (
    <div style={{ width: '100%', minWidth: '375px', backgroundColor: 'inherit', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Header Section */}
      <div style={{ position: 'relative', width: '100%', height: '350px' }}>
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/rectangl.png" 
          alt="Main background"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/play-btn.png"
          alt="Play button"
          style={{ 
            width: '90px', 
            height: '90px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer'
          }}
        />
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/menu-2.png"
          alt="Menu"
          style={{ 
            width: '24px',
            height: '24px',
            position: 'absolute',
            top: '20px',
            right: '20px',
            cursor: 'pointer'
          }}
        />
      </div>

      {/* Exercise Details */}
      <div style={{ padding: '20px', width: '100%', maxWidth: '414px' }}>
        <h1 style={{ 
          fontFamily: 'Inter',
          fontSize: '24px',
          fontWeight: 800,
          color: '#2B2B2B',
          margin: '0 0 10px 0'
        }}>Monday</h1>
        
        <p style={{ 
          fontFamily: 'Inter',
          fontSize: '16px',
          fontWeight: 400,
          color: '#C4C4C4',
          lineHeight: '21px',
          margin: '0 0 20px 0'
        }}>
          Warm up properly before exercising to prevent injury and make your poses more effective.
        </p>

        <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            padding: '8px 16px',
            backgroundColor: '#AD425340',
            borderRadius: '5px'
          }}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/icon-c.png" alt="Clock" style={{ width: '16px', height: '16px' }} />
            <span style={{ 
              fontFamily: 'Inter',
              fontSize: '15.71px',
              fontWeight: 700,
              color: '#FF6079'
            }}>10.00 mins</span>
          </div>

          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            padding: '8px 16px',
            backgroundColor: '#F8E1D2',
            borderRadius: '5px'
          }}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/icon-r.png" alt="Status" style={{ width: '16px', height: '16px' }} />
            <span style={{ 
              fontFamily: 'Inter',
              fontSize: '15.71px',
              fontWeight: 700,
              color: '#FA7B34'
            }}>Active</span>
          </div>
        </div>

        <h2 style={{ 
          fontFamily: 'Inter',
          fontSize: '20px',
          fontWeight: 700,
          color: '#2B2B2B',
          margin: '0 0 20px 0'
        }}>Exercises</h2>
      </div>

      {/* Navigation Bar */}
      <div style={{ 
        width: '100%',
        padding: '13px 46px',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        bottom: 0,
        maxWidth: '414px'
      }}>
        <img src="https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/home.png" alt="Home" style={{ width: '25px', height: '25px', cursor: 'pointer' }} />
        <img src="https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/exercise.png" alt="Exercise" style={{ width: '25px', height: '25px', cursor: 'pointer' }} />
        <img src="https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/people-i.png" alt="People" style={{ width: '20px', height: '25px', cursor: 'pointer' }} />
        <img src="https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/settings.png" alt="Settings" style={{ width: '25px', height: '25px', cursor: 'pointer' }} />
      </div>
    </div>
  );
};

export default HeaderExerciseDetailsNavigationBar;

