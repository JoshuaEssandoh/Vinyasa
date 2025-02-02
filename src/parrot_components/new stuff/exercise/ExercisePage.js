import React from 'react';
import Header from './Header';
import TaglineSection from './TaglineSection';
import ExercisesTitle from './ExercisesTitle';
import ExerciseDetails_NavigationBar from './ExerciseDetails_NavigationBar';

const ExercisePage = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fff' }}>
      {/* Header Section */}
      <div style={{ flexGrow: 1, width: '100%' }}>
        <Header />
      </div>

      {/* Tagline Section */}
      <div style={{ flexGrow: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TaglineSection />
      </div>

      {/* Exercises Title */}
      <div style={{ flexGrow: 1, width: '100%', display: 'flex', justifyContent: 'center' }}>
        <ExercisesTitle />
      </div>

      {/* Exercise Details and Navigation Bar */}
      <div style={{ flexGrow: 2, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ExerciseDetails_NavigationBar />
      </div>
    </div>
  );
};

export default ExercisePage;

