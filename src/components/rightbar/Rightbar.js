import React from 'react';
import './Rightbar.scss';

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbar__wrapper">
        <div className="rightbar__birthdayContainer">
          <img src="/assets/gift.png" alt="gift icon" className="birthdayImg" />
          <span className="birthdayText">
            <b>Richard Rimmy </b> and <b>3 other friends </b> have birthday today
          </span>
        </div>
        <div className="rightbar__ad">
          <img src="/assets/ad.png" alt="ad img" className="rightbar__adImg" />
        </div>
        <div className="rightbar__onlineFriendsContainer">
          <h4>Online Friends</h4>
          <ul className="rightbar__onlineFriendList">
            <li className="rightbar__onlineFriend">
              <div className="rightbar__onlineFriendImgContainer">
                <img src="/assets/person/2.jpg" alt="online frind img" className="onlineFriendImg" />
                <span className="rightbar__onlineBadge"></span>
              </div>
              <span className="rightbar__onlineFriendUsername">James Rick</span>
            </li>
            <li className="rightbar__onlineFriend">
              <div className="rightbar__onlineFriendImgContainer">
                <img src="/assets/person/3.jpg" alt="online frind img" className="onlineFriendImg" />
                <span className="rightbar__onlineBadge"></span>
              </div>
              <span className="rightbar__onlineFriendUsername">Joe Doe</span>
            </li>
            <li className="rightbar__onlineFriend">
              <div className="rightbar__onlineFriendImgContainer">
                <img src="/assets/person/4.jpg" alt="online frind img" className="onlineFriendImg" />
                <span className="rightbar__onlineBadge"></span>
              </div>
              <span className="rightbar__onlineFriendUsername">Richard Rimmy</span>
            </li>
            <li className="rightbar__onlineFriend">
              <div className="rightbar__onlineFriendImgContainer">
                <img src="/assets/person/5.jpg" alt="online frind img" className="onlineFriendImg" />
                <span className="rightbar__onlineBadge"></span>
              </div>
              <span className="rightbar__onlineFriendUsername">Salena James</span>
            </li>
            <li className="rightbar__onlineFriend">
              <div className="rightbar__onlineFriendImgContainer">
                <img src="/assets/person/6.jpg" alt="online frind img" className="onlineFriendImg" />
                <span className="rightbar__onlineBadge"></span>
              </div>
              <span className="rightbar__onlineFriendUsername">James Fredrickson</span>
            </li>
            <li className="rightbar__onlineFriend">
              <div className="rightbar__onlineFriendImgContainer">
                <img src="/assets/person/7.jpg" alt="online frind img" className="onlineFriendImg" />
                <span className="rightbar__onlineBadge"></span>
              </div>
              <span className="rightbar__onlineFriendUsername">Denim Fred</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


export default Rightbar;