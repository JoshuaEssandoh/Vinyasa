import React from 'react';
import Header from '../Header';
import TaglineAndStatus from './TaglineAndStatus';
import ExerciseDetails from './ExerciseDetails';
import NavigationBar from '../NavigationBar';

const ExercisePage = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fff' }}>
      <Header style={{ flexGrow: 1, width: '100%' }} />
      <div style={{ flexGrow: 2, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0' }}>
        <TaglineAndStatus style={{ width: '100%', marginBottom: '20px' }} />
        <ExerciseDetails style={{ width: '100%' }} />
      </div>
      <NavigationBar style={{ width: '100%', height: '51px' }} />
    </div>
  );
};

export default ExercisePage;

