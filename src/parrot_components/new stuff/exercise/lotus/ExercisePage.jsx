import React from 'react';
import Header from './Header';
import MainContent_NavigationBar from './MainContent_NavigationBar';

const ExercisePage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#f8f8f8'
    }}>
      <Header />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 0'
      }}>
        <MainContent_NavigationBar />
      </div>
    </div>
  );
};

export default ExercisePage;

