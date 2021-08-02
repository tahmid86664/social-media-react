import React from 'react';
import './Topbar.scss';
import { Search, Person, Chat, Notifications, ExitToApp } from '@material-ui/icons';
import { users } from '../../mockData';
import { Link, useHistory } from 'react-router-dom';

const Topbar = ({ currentUser, setUser }) => {
  const history = useHistory();

  const handleLogout = () => {
    setUser(null);

    history.push('/');
  }

  return (
    <div className="topbar">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="topbarLogo">Friendlyyy</span> 
        </Link>
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
          <div className="topbarIcon" onClick={handleLogout}>
            <ExitToApp />
          </div>
        </div>
        <Link to={`/user/${currentUser}`} style={{ textDecoration: "none" }}>
          <img className="topbarProfileImg" src={users.filter(user => user.id === currentUser)[0].imgUrl} alt="profile" />
        </Link>
      </div>
    </div>
  );
}


export default Topbar;