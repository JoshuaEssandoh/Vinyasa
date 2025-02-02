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
      {/* Header */}
      <div style={{ width: '100%', flexGrow: 0 }}>
        <Header />
      </div>

      {/* Search Bar */}
      <div style={{ width: '100%', flexGrow: 0, padding: '0 20px' }}>
        <h1 style={{ fontFamily: 'Nunito, sans-serif', fontSize: '24px', fontWeight: 700, color: '#2B2B2B', margin: '20px 0' }}>Find Your <span style={{ fontWeight: 800 }}>Yoga Class</span></h1>
        <SearchBar />
      </div>

      {/* Today's Activity Card */}
      <div style={{ width: '100%', flexGrow: 0, padding: '0 20px' }}>
        <TodayActivityCard />
      </div>

      {/* Recommendation Class */}
      <div style={{ width: '100%', flexGrow: 0, padding: '0 20px' }}>
        <RecommendationClass />
      </div>

      {/* Individual Classes */}
      <div style={{ width: '100%', flexGrow: 1, padding: '0 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <IndividualClasses />
      </div>

      {/* Navigation Bar */}
      <div style={{ width: '100%', flexGrow: 0 }}>
        <NavigationBar />
      </div>
    </div>
  );
};

export default Layout;

