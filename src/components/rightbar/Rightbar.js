import React from 'react';
import './Rightbar.scss';
import HomeRightbar from '../home_rightbar/HomeRightbar';
import ProfileRightbar from '../profile_rightbar/ProfileRightbar';

const Rightbar = ({ currentUser ,profile }) => {
  return (
    <div className="rightbar">
      <div className="rightbar__wrapper">
        {
          profile ? (
            <ProfileRightbar currentUser={currentUser} />
          ) : (
            <HomeRightbar currentUser={currentUser} />
          )
        }
      </div>
    </div>
  );
}


export default Rightbar;