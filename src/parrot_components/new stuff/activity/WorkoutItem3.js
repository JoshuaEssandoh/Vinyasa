import React from 'react';
import { ReactComponent as WorkoutIcon } from './icon-4.png';
import { ReactComponent as MoreIcon } from './icon-3.png';
import { ReactComponent as ChartImage } from './chart-2.png';

const WorkoutItem3 = ({ title = 'Outdoor Walk', time = '1:28:03' }) => {
  return (
    <div style={{
      width: '100%',
      maxWidth: '327px',
      height: '234px',
      backgroundColor: '#ff7187',
      borderRadius: '24px',
      marginBottom: '16px',
      padding: '16px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#b610e5',
        opacity: 0.1,
        borderRadius: '24px'
      }} />

      {/* Title section */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <WorkoutIcon style={{
            width: '56px',
            height: '56px'
          }} />
          <div style={{
            marginLeft: '16px'
          }}>
            <div style={{
              color: '#7f7f7f',
              fontFamily: 'DM Sans',
              fontSize: '16px',
              fontWeight: 700,
              lineHeight: '26px'
            }}>
              {title}
            </div>
            <div style={{
              color: '#040415',
              fontFamily: 'DM Sans',
              fontSize: '16px',
              fontWeight: 700,
              lineHeight: '26px'
            }}>
              {time}
            </div>
          </div>
        </div>
        <MoreIcon style={{
          width: '24px',
          height: '24px',
          cursor: 'pointer'
        }} />
      </div>

      {/* Graph section */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <ChartImage style={{
          width: '100%',
          height: '82px',
          marginBottom: '8px'
        }} />
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '24px'
        }}>
          <span style={{
            fontFamily: 'Alata',
            fontSize: '14px',
            fontWeight: 400,
            color: '#7f7f7f',
            lineHeight: '24px'
          }}>1</span>
          <span style={{
            fontFamily: 'Alata',
            fontSize: '14px',
            fontWeight: 400,
            color: '#7f7f7f',
            lineHeight: '24px',
            textAlign: 'center'
          }}>6</span>
          <span style={{
            fontFamily: 'Alata',
            fontSize: '14px',
            fontWeight: 400,
            color: '#7f7f7f',
            lineHeight: '24px',
            textAlign: 'center'
          }}>12</span>
          <span style={{
            fontFamily: 'Alata',
            fontSize: '14px',
            fontWeight: 400,
            color: '#7f7f7f',
            lineHeight: '24px',
            textAlign: 'center'
          }}>18</span>
          <span style={{
            fontFamily: 'Alata',
            fontSize: '14px',
            fontWeight: 400,
            color: '#7f7f7f',
            lineHeight: '24px',
            textAlign: 'right'
          }}>24</span>
        </div>
      </div>
    </div>
  );
};

export default WorkoutItem3;

