import React from 'react';

const ExercisesTitle = ({ title = 'Exercises' }) => {
  return (
    <div style={{
      minWidth: '95px', // Based on the width from figma
      height: '25px', // Based on the height from figma
      display: 'flex',
      justifyContent: 'center', // Centering the text
      alignItems: 'center'
    }}>
      <h2 style={{
        margin: 0,
        padding: 0,
        fontFamily: 'Inter, sans-serif',
        fontSize: '20px',
        fontWeight: 700,
        color: '#2B2B2B',
        lineHeight: '25px',
        textAlign: 'center' // Centering the text
      }}>
        {title}
      </h2>
    </div>
  );
};

export default ExercisesTitle;
