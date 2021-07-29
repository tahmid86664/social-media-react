import React from 'react';
import './CloseFriends.scss';

const CloseFriends = ({ user }) => {
  return (
    <li key={user.id} className="leftbar__friend">
      <img src={user.imgUrl} 
        alt="friend profile img" 
        className="leftbar__friendImg" 
      />
      <span className="leftbar__friendName">{user.name}</span>
    </li>
  );
}


export default CloseFriends;