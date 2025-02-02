import React from 'react';
import Header from './Header';
import VideoSection from './VideoSection';
import PlayButton from './PlayButton';
import StatisticsSection from './StatisticsSection';
import InformationSection from './InformationSection';
import NavigationBar from './NavigationBar';

const ExercisePage = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fff' }}>
      <Header style={{ flexGrow: 0, width: '100%', height: 'auto' }} />
      <div style={{ flexGrow: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
        <VideoSection style={{ flexGrow: 0, width: '100%', height: 'auto', position: 'relative' }} />
        <PlayButton style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        <StatisticsSection style={{ flexGrow: 0, width: '100%', height: 'auto', display: 'flex', justifyContent: 'space-around', padding: '20px 0' }} />
        <InformationSection style={{ flexGrow: 0, width: '100%', height: 'auto', padding: '20px' }} />
      </div>
      <NavigationBar style={{ flexGrow: 0, width: '100%', height: 'auto' }} />
    </div>
  );
};

export default ExercisePage;

