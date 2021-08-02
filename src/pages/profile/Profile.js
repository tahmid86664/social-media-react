import React, { useState } from 'react';
import './Profile.scss';
import Topbar from '../../components/topbar/Topbar';
import Leftbar from '../../components/leftbar/Leftbar';
import Newsfeed from '../../components/newsfeed/Newsfeed';
import Rightbar from '../../components/rightbar/Rightbar';
import { users } from '../../mockData';
// import queryString from 'query-string';
import { useParams } from 'react-router-dom';

const Profile = ({ setUser }) => {
  const { userId } = useParams();
  console.log( parseInt(userId) );

  const [user] = useState(users.filter(user => user.id === parseInt(userId))[0]);
  console.log(user);

  return (
    <div className="profile">
      <Topbar currentUser={parseInt(userId)} setUser={setUser} />
      <div className="profile__body">
        <Leftbar currentUser={parseInt(userId)} />
        <div className="profile__right">
          <div className="profile__rightTop">
            <div className="profile__topImages">
              <img src="/assets/post/1.jpeg" alt="" className="profile__coverImg" />
              <img src={user.imgUrl} alt="" className="profile__profileImg" />
            </div>
            <div className="profile__userInfo">
              <h4>{user.name}</h4>
              <span className="profile__userDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profile__rightBottom">
            <Newsfeed currentUser={parseInt(userId)} />
            <Rightbar profile currentUser={parseInt(userId)} />
          </div>
        </div>
      </div>
    </div>
  );
}


export default Profile;