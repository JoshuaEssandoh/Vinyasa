import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import TodayActivityCard from './TodayActivityCard';
import RecommendationClass from './RecommendationClass';
import IndividualClasses from './IndividualClasses';
import NavigationBar from './NavigationBar';

const Layout = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#ffffff' }}>
      <Header style={{ flexGrow: 0, width: '100%', height: 'auto' }} />
      <div style={{ flexGrow: 0, width: '100%', padding: '20px', maxWidth: '414px', boxSizing: 'border-box' }}>
        <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: '24px', fontWeight: 700, color: '#2b2b2b', marginBottom: '20px' }}>Find Your <span style={{ fontWeight: 800 }}>Yoga Class</span></h1>
        <SearchBar style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
        <TodayActivityCard style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
        <RecommendationClass style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
        <IndividualClasses style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
      </div>
      <NavigationBar style={{ flexGrow: 0, width: '100%', height: 'auto' }} />
    </div>
  );
};

export default Layout;

