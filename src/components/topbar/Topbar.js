import React from 'react';
import './Topbar.scss';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarLeft">
        <span className="topbarLogo">Friendlyyy</span> 
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchbarIcon" />
          <input className="searchbarInput" type="text" placeholder="Search here..." />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIcon">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIcon">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIcon">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img className="topbarProfileImg" src="/assets/person/1.jpeg" alt="profile" />
      </div>
    </div>
  );
}


export default Topbar;