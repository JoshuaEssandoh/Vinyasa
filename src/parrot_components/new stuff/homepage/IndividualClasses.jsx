import React from 'react';

const IndividualClasses = ({ classes = [
  {
    day: 'Monday',
    background: '#ffddf1',
    image: 'https://dashboard.codeparrot.ai/api/image/Z58t2Q58MnUDluQU/img.png'
  },
  {
    day: 'Tuesday',
    background: '#f1f3fa',
    image: 'https://dashboard.codeparrot.ai/api/image/Z58t2Q58MnUDluQU/img-2.png'
  },
  {
    day: 'Wednesday',
    background: '#ffd6d6',
    image: 'https://dashboard.codeparrot.ai/api/image/Z58t2Q58MnUDluQU/img-3.png'
  },
  {
    day: 'Thursday',
    background: '#ddf2ff',
    image: 'https://dashboard.codeparrot.ai/api/image/Z58t2Q58MnUDluQU/img-4.png'
  }
] }) => {
  return (
    <div style={{
      width: '100%',
      maxWidth: '394px',
      padding: '20px 0'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '32px',
        padding: '0 10px'
      }}>
        <h2 style={{
          margin: 0,
          fontFamily: 'Inter',
          fontSize: '18px',
          fontWeight: 700,
          color: '#2B2B2B'
        }}>
          Individual Classes
        </h2>
        <button 
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            fontFamily: 'Inter',
            fontSize: '15px',
            fontWeight: 600,
            color: '#FF6079',
            cursor: 'pointer'
          }}
          onClick={() => console.log('See all clicked')}
        >
          See all
        </button>
      </div>

      <div style={{
        display: 'flex',
        gap: '10px',
        overflowX: 'auto',
        padding: '0 10px'
      }}>
        {classes.map((classItem, index) => (
          <div
            key={index}
            style={{
              minWidth: '142px',
              height: '236px',
              borderRadius: '15px',
              backgroundColor: classItem.background,
              overflow: 'hidden',
              position: 'relative',
              cursor: 'pointer',
              flexShrink: 0
            }}
            onClick={() => console.log(`${classItem.day} card clicked`)}
          >
            <div style={{
              width: '212px',
              height: '309px',
              position: 'absolute',
              top: '-31px',
              left: '-32px'
            }}>
              <img 
                src={classItem.image}
                alt={`${classItem.day} exercise`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <h3 style={{
              margin: 0,
              padding: '15px 0',
              fontFamily: 'Nunito',
              fontSize: '20px',
              fontWeight: 800,
              color: '#2B2B2B',
              textAlign: 'center',
              position: 'relative',
              zIndex: 1
            }}>
              {classItem.day}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndividualClasses;

