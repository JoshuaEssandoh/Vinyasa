import React from 'react';
import HeaderExerciseDetailsNavigationBar from './HeaderExerciseDetailsNavigationBar';
import ExerciseList from './ExerciseList';

const ExercisePageLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', minHeight: '100vh', backgroundColor: '#F8F8F8' }}>
      {/* Header Section */}
      <div style={{ flexGrow: 1 }}>
        <HeaderExerciseDetailsNavigationBar />
      </div>

      {/* Exercise List Section */}
      <div style={{ flexGrow: 2, backgroundColor: '#FFFFFF', borderTopLeftRadius: '20px', borderTopRightRadius: '20px', marginTop: '-20px', paddingTop: '20px' }}>
        <ExerciseList />
      </div>
    </div>
  );
};

export default ExercisePageLayout;

