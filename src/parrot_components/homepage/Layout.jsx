import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import TodayActivityCard from './TodayActivityCard';
import RecommendationClass from './RecommendationClass';
import IndividualClasses from './IndividualClasses';
import NavigationBar from './NavigationBar';

const Layout = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      padding: '20px 0'
    }}>
      <Header style={{ flexGrow: 0 }} />
      <div style={{
        width: '100%',
        maxWidth: '374px',
        padding: '0 20px'
      }}>
        <h1 style={{
          fontFamily: 'Nunito, sans-serif',
          fontSize: '24px',
          fontWeight: 800,
          color: '#2B2B2B',
          margin: '20px 0'
        }}>Find Your <span style={{ color: '#FF6079' }}>Yoga Class</span></h1>
        <SearchBar style={{ flexGrow: 0 }} />
        <TodayActivityCard style={{ flexGrow: 0, marginTop: '20px' }} />
        <RecommendationClass style={{ flexGrow: 1, marginTop: '20px' }} />
        <IndividualClasses style={{ flexGrow: 1, marginTop: '20px' }} />
      </div>
      <NavigationBar style={{ flexGrow: 0, marginTop: '20px' }} />
    </div>
  );
};

export default Layout;