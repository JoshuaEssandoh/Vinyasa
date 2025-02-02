import React from 'react';

const exerciseData = [
  { title: 'Stretch', duration: '02.30 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/card-e.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/play-btn.png' },
  { title: 'Chair Pose', duration: '02.00 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/card-e-2.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/play-btn-2.png' },
  { title: 'Side Plank', duration: '03.20 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/card-e-3.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/play-btn-3.png' },
  { title: 'Downward Dog', duration: '02.30 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/card-e-4.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/play-btn-4.png' },
  { title: 'Lotus', duration: '05.30 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/card-e-5.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/play-btn-5.png' },
  { title: 'Tree', duration: '01.10 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/card-e-6.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/play-btn-6.png' },
  { title: 'Warrior Pose', duration: '04.50 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/card-e-7.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/play-btn-7.png' },
  { title: 'Exercise 8', duration: '03.30 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/card-e-8.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/play-btn-8.png' },
  { title: 'Exercise 9', duration: '01.30 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/card-e-9.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/play-btn-9.png' },
  { title: 'Exercise 10', duration: '05.20 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/card-e-10.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/play-btn-10.png' }
];

const ExerciseDetails_NavigationBar = () => {
  return (
    <div style={{ width: '100%', maxWidth: '374px', backgroundColor: 'inherit', padding: '0 10px' }}>
      {/* Exercise List */}
      <div style={{ marginBottom: '60px' }}>
        {exerciseData.map((exercise, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px 0',
            height: '71px',
            marginBottom: '10px',
            borderBottom: '1px solid #e0e0e0'
          }}>
            <img 
              src={exercise.image} 
              alt={exercise.title}
              style={{ width: '68px', height: '68px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <div style={{ 
              marginLeft: '21px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px'
            }}>
              <span style={{ 
                fontFamily: 'Inter',
                fontSize: '16px',
                fontWeight: 700,
                color: '#2b2b2b'
              }}>{exercise.title}</span>
              <span style={{
                fontFamily: 'Inter',
                fontSize: '13px',
                fontWeight: 500,
                color: '#c4c4c4'
              }}>{exercise.duration}</span>
            </div>
            <img
              src={exercise.playBtn}
              alt="Play"
              style={{ 
                width: '50px',
                height: '50px',
                marginLeft: 'auto',
                cursor: 'pointer'
              }}
              onClick={() => console.log(`Playing ${exercise.title}`)}
            />
          </div>
        ))}
      </div>

      {/* Navigation Bar */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        maxWidth: '374px',
        height: '60px',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10px 0',
        boxShadow: '0px -2px 10px rgba(0,0,0,0.1)'
      }}>
        <img src="https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/home.png" alt="Home" style={{ width: '25px', height: '25px', cursor: 'pointer' }} />
        <img src="https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/exercise.png" alt="Exercise" style={{ width: '25px', height: '25px', cursor: 'pointer' }} />
        <img src="https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/people-i.png" alt="People" style={{ width: '20px', height: '25px', cursor: 'pointer' }} />
        <img src="https://dashboard.codeparrot.ai/api/image/Z58uijRi7Jes38vK/settings.png" alt="Settings" style={{ width: '25px', height: '25px', cursor: 'pointer' }} />
      </div>
    </div>
  );
};

export default ExerciseDetails_NavigationBar;

