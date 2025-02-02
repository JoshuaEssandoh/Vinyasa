import React from 'react';
import './Account.css';

const Account = ({ 
  name = "Josephine Jetta",
  type = "Pro",
  onClose = () => {},
  onMore = () => {},
  onSignOut = () => {},
  onGoalsClick = () => {},
  onMyBodyClick = () => {},
  onSettingsClick = () => {}
}) => {
  return (
    <div className="account-container">
      <div className="header">
        <button className="icon-button" onClick={onClose}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z58ybw58MnUDluQZ/close.png" alt="close" width={56} height={56} />
        </button>
        <h1 className="title">Account</h1>
        <button className="icon-button" onClick={onMore}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z58ybw58MnUDluQZ/more.png" alt="more" width={56} height={56} />
        </button>
      </div>

      <div className="profile-section">
        <div className="avatar-container">
          <img src="https://dashboard.codeparrot.ai/api/image/Z58ybw58MnUDluQZ/ellipse.png" alt="avatar-bg" className="avatar-background" />
          <img src="https://dashboard.codeparrot.ai/api/image/Z58ybw58MnUDluQZ/avatar.png" alt="avatar" className="avatar" />
        </div>
        <h2 className="profile-name">{name}</h2>
        <p className="profile-type">{type}</p>
        <div className="divider" />
      </div>

      <div className="menu-items">
        <button className="menu-item" onClick={onGoalsClick}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z58ybw58MnUDluQZ/icon-3.png" alt="goals" width={48} height={48} />
          <span>Goals</span>
          <img src="https://dashboard.codeparrot.ai/api/image/Z58ybw58MnUDluQZ/arrow-3.png" alt="arrow" className="arrow" />
        </button>

        <button className="menu-item" onClick={onMyBodyClick}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z58ybw58MnUDluQZ/icon-2.png" alt="my body" width={48} height={48} />
          <span>My Body</span>
          <img src="https://dashboard.codeparrot.ai/api/image/Z58ybw58MnUDluQZ/arrow-2.png" alt="arrow" className="arrow" />
        </button>

        <button className="menu-item" onClick={onSettingsClick}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z58ybw58MnUDluQZ/icon.png" alt="settings" width={48} height={48} />
          <span>Settings</span>
          <img src="https://dashboard.codeparrot.ai/api/image/Z58ybw58MnUDluQZ/arrow.png" alt="arrow" className="arrow" />
        </button>
      </div>

      <button className="sign-out-button" onClick={onSignOut}>
        Sign Out
      </button>

      <div className="background-ellipse" />
    </div>
  );
};

export default Account;

