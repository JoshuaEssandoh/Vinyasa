import React from 'react';

const exerciseData = [
  { id: 1, title: 'Stretch', duration: '02:30 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/card-e.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/play-btn-2.png' },
  { id: 2, title: 'Chair Pose', duration: '02:00 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/card-e-2.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/play-btn-3.png' },
  { id: 3, title: 'Side Plank', duration: '03:20 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/card-e-3.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/play-btn-4.png' },
  { id: 4, title: 'Downward Dog', duration: '02:30 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/card-e-4.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/play-btn-5.png' },
  { id: 5, title: 'Lotus', duration: '01:30 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/card-e-5.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/play-btn-6.png' },
  { id: 6, title: 'Half-Seated Twist', duration: '01:10 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/card-e-6.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/play-btn-7.png' },
  { id: 7, title: 'Warrior Pose', duration: '04:50 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/card-e-7.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/play-btn-8.png' },
  { id: 8, title: 'Exercise 8', duration: '03:30 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/card-e-8.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/play-btn-9.png' },
  { id: 9, title: 'Exercise 9', duration: '01:30 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/card-e-9.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/play-btn-10.png' },
  { id: 10, title: 'Exercise 10', duration: '05:20 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/card-e-10.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z56hsg58MnUDluPj/play-btn-11.png' }
];

const ExerciseList = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    padding: '20px',
    width: '100%',
    maxWidth: '374px',
    margin: '0 auto',
    minWidth: '320px'
  };

  const exerciseItemStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '71px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '0 10px'
  };

  const exerciseImageStyle = {
    width: '68px',
    height: '68px',
    objectFit: 'cover',
    borderRadius: '8px'
  };

  const textContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    marginLeft: '20px',
    flex: 1
  };

  const titleStyle = {
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: 700,
    color: '#2b2b2b',
    margin: 0
  };

  const durationStyle = {
    fontFamily: 'Inter',
    fontSize: '13px',
    fontWeight: 500,
    color: '#c4c4c4',
    margin: 0
  };

  const playButtonStyle = {
    width: '50px',
    height: '50px',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    ':hover': {
      transform: 'scale(1.1)'
    }
  };

  return (
    <div style={containerStyle}>
      {exerciseData.map((exercise) => (
        <div key={exercise.id} style={exerciseItemStyle}>
          <img src={exercise.image} alt={exercise.title} style={exerciseImageStyle} />
          <div style={textContainerStyle}>
            <p style={titleStyle}>{exercise.title}</p>
            <p style={durationStyle}>{exercise.duration}</p>
          </div>
          <img 
            src={exercise.playBtn} 
            alt="Play" 
            style={playButtonStyle}
            onClick={() => console.log(`Playing ${exercise.title}`)}
          />
        </div>
      ))}
    </div>
  );
};

export default ExerciseList;

