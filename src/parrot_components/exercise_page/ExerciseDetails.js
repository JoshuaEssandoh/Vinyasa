import React from 'react';

const ExerciseDetails = ({ style = {} }) => {
  const exercises = [
    { id: 1, title: 'Exercise 1', duration: '02.30 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z56bZg58MnUDluPi/card-e.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z56bZg58MnUDluPi/play-btn.png' },
    { id: 2, title: 'Exercise 2', duration: '02.00 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z56bZg58MnUDluPi/card-e-2.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z56bZg58MnUDluPi/play-btn-2.png' },
    { id: 3, title: 'Exercise 3', duration: '03.20 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z56bZg58MnUDluPi/card-e-3.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z56bZg58MnUDluPi/play-btn-3.png' },
    { id: 4, title: 'Exercise 4', duration: '02.30 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z56bZg58MnUDluPi/card-e-4.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z56bZg58MnUDluPi/play-btn-4.png' },
    { id: 5, title: 'Exercise 5', duration: '05.30 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z56bZg58MnUDluPi/card-e-5.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z56bZg58MnUDluPi/play-btn-5.png' },
    { id: 6, title: 'Exercise 6', duration: '06.10 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z56bZg58MnUDluPi/card-e-6.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z56bZg58MnUDluPi/play-btn-6.png' },
    { id: 7, title: 'Exercise 7', duration: '04.50 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z56bZg58MnUDluPi/card-e-7.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z56bZg58MnUDluPi/play-btn-7.png' },
    { id: 8, title: 'Exercise 8', duration: '03.30 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z56bZg58MnUDluPi/card-e-8.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z56bZg58MnUDluPi/play-btn-8.png' },
    { id: 9, title: 'Exercise 9', duration: '01.30 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z56bZg58MnUDluPi/card-e-9.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z56bZg58MnUDluPi/play-btn-9.png' },
    { id: 10, title: 'Exercise 10', duration: '05.20 Minutes', image: 'https://dashboard.codeparrot.ai/api/image/Z56bZg58MnUDluPi/card-e-10.png', playBtn: 'https://dashboard.codeparrot.ai/api/image/Z56bZg58MnUDluPi/play-btn-10.png' }
  ];

  const containerStyle = {
    width: '100%',
    maxWidth: '374px',
    minHeight: '281px',
    display: 'flex',
    flexDirection: 'column',
    gap: '13px',
    padding: '20px',
    boxSizing: 'border-box',
    ...style
  };

  const exerciseItemStyle = {
    width: '100%',
    height: '71px',
    display: 'flex',
    alignItems: 'center',
    padding: '3px 0'
  };

  const exerciseImageStyle = {
    width: '68px',
    height: '68px'
  };

  const contentStyle = {
    marginLeft: '21px',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  };

  const titleStyle = {
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: 700,
    color: '#2B2B2B'
  };

  const durationStyle = {
    fontFamily: 'Inter',
    fontSize: '13px',
    fontWeight: 500,
    color: '#C4C4C4'
  };

  const playButtonStyle = {
    width: '50px',
    height: '50px',
    marginLeft: 'auto',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      {exercises.map((exercise) => (
        <div key={exercise.id} style={exerciseItemStyle}>
          <img src={exercise.image} alt={exercise.title} style={exerciseImageStyle} />
          <div style={contentStyle}>
            <span style={titleStyle}>{exercise.title}</span>
            <span style={durationStyle}>{exercise.duration}</span>
          </div>
          <img 
            src={exercise.playBtn} 
            alt="Play" 
            style={playButtonStyle}
            onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
            onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
          />
        </div>
      ))}
    </div>
  );
};

export default ExerciseDetails;

