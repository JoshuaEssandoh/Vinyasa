import React from 'react';

const Content = ({ style = {} }) => {
  const stats = [
    {
      icon: 'https://dashboard.codeparrot.ai/api/image/Z58xRDRi7Jes38vN/icon-4.png',
      value: '54 Kcal',
      label: 'Last 7 days'
    },
    {
      icon: 'https://dashboard.codeparrot.ai/api/image/Z58xRDRi7Jes38vN/icon-3.png', 
      value: '670 Kcal',
      label: 'All Time'
    },
    {
      icon: 'https://dashboard.codeparrot.ai/api/image/Z58xRDRi7Jes38vN/icon-2.png',
      value: '13 Kcal', 
      label: 'Average'
    }
  ];

  return (
    <div style={{
      width: '100%',
      maxWidth: '375px',
      padding: '20px',
      backgroundColor: '#fff',
      boxSizing: 'border-box',
      ...style
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '40px'
      }}>
        {stats.map((stat, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '109px'
          }}>
            <img 
              src={stat.icon}
              alt={stat.label}
              style={{
                width: '24px',
                height: '24px',
                marginBottom: '8px'
              }}
            />
            <span style={{
              fontFamily: 'DM Sans',
              fontSize: '14px',
              fontWeight: 700,
              lineHeight: '24px',
              color: '#040415',
              marginBottom: '4px'
            }}>
              {stat.value}
            </span>
            <span style={{
              fontFamily: 'DM Sans',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '24px',
              color: '#7f7f7f',
              opacity: 0.6
            }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: '16px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px'
        }}>
          <h2 style={{
            fontFamily: 'DM Sans',
            fontSize: '18px',
            fontWeight: 700,
            lineHeight: '28px',
            color: '#040415',
            margin: 0
          }}>
            Stretch
          </h2>
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z58xRDRi7Jes38vN/icon.png"
            alt="Info"
            style={{
              width: '24px',
              height: '24px'
            }}
          />
        </div>
        <p style={{
          fontFamily: 'DM Sans',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '23.5px',
          color: '#7f7f7f',
          margin: 0
        }}>
          "I embrace the fire within me, building strength, stability, and determination."
          <br /><br />
          Release tension, restore energy, and awaken your body. Stretching improves flexibility, reduces stress, and nurtures your well-being. Move with intention, honor your body, and feel the empowerment of every deep, restorative breath.
        </p>
      </div>
    </div>
  );
};

export default Content;

