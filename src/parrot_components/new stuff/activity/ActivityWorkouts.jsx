import React from 'react';
import Header from './Header';
import WorkoutItem from './WorkoutItem';
import WorkoutItem2 from './WorkoutItem2';
import WorkoutItem3 from './WorkoutItem3';
import NavigationBar from './NavigationBar';

const ActivityWorkouts = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: '410px',
      margin: '0 auto',
      backgroundColor: '#ffffff',
      padding: '16px 0'
    }}>
      <Header />
      <div style={{
        flexGrow: 1,
        width: '100%',
        padding: '0 16px',
        boxSizing: 'border-box'
      }}>
        <WorkoutItem />
        <WorkoutItem2 />
        <WorkoutItem3 />
      </div>
      <NavigationBar />
    </div>
  );
};

export default ActivityWorkouts;

