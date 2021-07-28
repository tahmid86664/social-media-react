import React from 'react';
import './Home.scss';

import Topbar from '../../components/topbar/Topbar';
import Leftbar from '../../components/leftbar/Leftbar';
import Newsfeed from '../../components/newsfeed/Newsfeed';
import Rightbar from '../../components/rightbar/Rightbar';

const Home = () => {
  return (
    <div className="home">
      <Topbar />
      <div className="home__body">
        <Leftbar />
        <Newsfeed />
        <Rightbar />
      </div>
    </div>
  );
}


export default Home;