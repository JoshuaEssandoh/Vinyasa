import React from 'react';
import Header from './Header';
import MainImage from './MainImage';
import Button from './Button';
import Content from './Content';
import NavigationBar from './NavigationBar';

const ExercisePage = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fff', position: 'relative' }}>
      <Header style={{ flexGrow: 0, width: '100%', height: 'auto' }} />
      <div style={{ flexGrow: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
        <MainImage style={{ flexGrow: 1, width: '100%', height: 'auto' }} />
        <Button style={{ flexGrow: 0, width: '65px', height: '65px', position: 'absolute', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }} />
        <Content style={{ flexGrow: 1, width: '100%', height: 'auto', padding: '20px' }} />
      </div>
      <NavigationBar style={{ flexGrow: 0, width: '100%', height: 'auto' }} />
    </div>
  );
};

export default ExercisePage;

