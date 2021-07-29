import React from 'react';
import './Leftbar.scss';
import { RssFeed, Chat, Theaters, Group, Event, Bookmark, Help, Work } from '@material-ui/icons';

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="leftbar__wrapper">
        <ul className="leftbar__list">
          <li className="leftbar__listItem">
            <RssFeed />
            <span className="leftbar__listItemText">Feed</span>
          </li>
          <li className="leftbar__listItem">
            <Chat />
            <span className="leftbar__listItemText">Chat</span>
          </li>
          <li className="leftbar__listItem">
            <Theaters />
            <span className="leftbar__listItemText">Videos</span>
          </li>
          <li className="leftbar__listItem">
            <Group />
            <span className="leftbar__listItemText">Groups</span>
          </li>
          <li className="leftbar__listItem">
            <Event />
            <span className="leftbar__listItemText">Events</span>
          </li>
          <li className="leftbar__listItem">
            <Bookmark />
            <span className="leftbar__listItemText">Bookmarks</span>
          </li>
          <li className="leftbar__listItem">
            <Work />
            <span className="leftbar__listItemText">Jobs</span>
          </li>
          <li className="leftbar__listItem">
            <Help />
            <span className="leftbar__listItemText">Help</span>
          </li>
        </ul>
        <button className="leftbar__button">Show More</button>
        <hr className="leftbar__hr" />
        <ul className="leftbar__friendList">
          <li className="leftbar__friend">
            <img src="/assets/person/2.jpg" 
              alt="friend profile img" 
              className="leftbar__friendImg" 
            />
            <span className="leftbar__friendName">James Rick</span>
          </li>
          <li className="leftbar__friend">
            <img src="/assets/person/3.jpg" 
              alt="friend profile img" 
              className="leftbar__friendImg" 
            />
            <span className="leftbar__friendName">Joe Doe</span>
          </li>
          <li className="leftbar__friend">
            <img src="/assets/person/4.jpg" 
              alt="friend profile img" 
              className="leftbar__friendImg" 
            />
            <span className="leftbar__friendName">Richard Rimmy</span>
          </li>
          <li className="leftbar__friend">
            <img src="/assets/person/5.jpg" 
              alt="friend profile img" 
              className="leftbar__friendImg" 
            />
            <span className="leftbar__friendName">Salena James</span>
          </li>
          <li className="leftbar__friend">
            <img src="/assets/person/6.jpg" 
              alt="friend profile img" 
              className="leftbar__friendImg" 
            />
            <span className="leftbar__friendName">James Fredrickson</span>
          </li>
          <li className="leftbar__friend">
            <img src="/assets/person/7.jpg" 
              alt="friend profile img" 
              className="leftbar__friendImg" 
            />
            <span className="leftbar__friendName">Denim Fred</span>
          </li>
          <li className="leftbar__friend">
            <img src="/assets/person/8.jpg" 
              alt="friend profile img" 
              className="leftbar__friendImg" 
            />
            <span className="leftbar__friendName">Zosef Shamp</span>
          </li>
          <li className="leftbar__friend">
            <img src="/assets/person/9.jpeg" 
              alt="friend profile img" 
              className="leftbar__friendImg" 
            />
            <span className="leftbar__friendName">Sophia Charlotte</span>
          </li>
          <li className="leftbar__friend">
            <img src="/assets/person/10.jpeg" 
              alt="friend profile img" 
              className="leftbar__friendImg" 
            />
            <span className="leftbar__friendName">Emma Isabella</span>
          </li>
        </ul>
      </div>
    </div>
  );
}


export default Leftbar;
