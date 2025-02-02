import React from 'react';

const StatisticsSection = ({ style }) => {
  const statItems = [
    {
      icon: 'https://dashboard.codeparrot.ai/api/image/Z58xQQ58MnUDluQW/icon-4.png',
      value: '56 Kcal',
      label: 'Last 7 days'
    },
    {
      icon: 'https://dashboard.codeparrot.ai/api/image/Z58xQQ58MnUDluQW/icon-3.png',
      value: '2.9k Kcal',
      label: 'All Time'
    },
    {
      icon: 'https://dashboard.codeparrot.ai/api/image/Z58xQQ58MnUDluQW/icon-2.png',
      value: '12 Kcal',
      label: 'Average'
    }
  ];

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    maxWidth: '327px',
    height: 'auto',
    padding: '0 24px',
    boxSizing: 'border-box',
    ...style
  };

  const itemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '109px',
    height: '84px'
  };

  const iconStyle = {
    width: '24px',
    height: '24px',
    marginBottom: '8px'
  };

  const valueStyle = {
    fontFamily: 'DM Sans',
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '24px',
    color: '#040415',
    textAlign: 'center',
    margin: '0'
  };

  const labelStyle = {
    fontFamily: 'DM Sans',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '24px',
    color: '#7f7f7f',
    textAlign: 'center',
    margin: '0',
    opacity: 0.6
  };

  return (
    <div style={containerStyle}>
      {statItems.map((item, index) => (
        <div key={index} style={itemStyle}>
          <img 
            src={item.icon} 
            alt="" 
            style={iconStyle}
          />
          <p style={valueStyle}>{item.value}</p>
          <p style={labelStyle}>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

StatisticsSection.defaultProps = {
  style: {}
};

export default StatisticsSection;

