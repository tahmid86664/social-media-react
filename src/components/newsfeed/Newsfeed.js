import React from 'react';
import './Newsfeed.scss';
import Share from '../share/Share';
import Posts from '../posts/Posts';

const Newsfeed = () => {
  return (
    <div className="newsfeed">
      <Share />
      <Posts />
    </div>
  );
}


export default Newsfeed;