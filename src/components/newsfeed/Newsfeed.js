import React from 'react';
import './Newsfeed.scss';
import Share from '../share/Share';
import Posts from '../posts/Posts';

const Newsfeed = ({currentUser}) => {
  return (
    <div className="newsfeed">
      <Share currentUser={currentUser} />
      <Posts />
    </div>
  );
}


export default Newsfeed;