import React from 'react';
import './Profile.scss';
import Topbar from '../../components/topbar/Topbar';
import Leftbar from '../../components/leftbar/Leftbar';
import Newsfeed from '../../components/newsfeed/Newsfeed';
import Rightbar from '../../components/rightbar/Rightbar';

const Profile = () => {
  return (
    <div className="profile">
      <Topbar />
      <div className="profile__body">
        <Leftbar />
        <div className="profile__right">
          <div className="profile__rightTop">
            <div className="profile__topImages">
              <img src="/assets/post/1.jpeg" alt="" className="profile__coverImg" />
              <img src="/assets/person/1.jpeg" alt="" className="profile__profileImg" />
            </div>
            <div className="profile__userInfo">
              <h4>Lisa Anabelle</h4>
              <span className="profile__userDesc">Hello I'm a punky MERN Dev</span>
            </div>
          </div>
          <div className="profile__rightBottom">
            <Newsfeed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
}


export default Profile;