import React from 'react';
import './Home.scss';

import Topbar from '../../components/topbar/Topbar';

const Home = () => {
  return (
    <div className="home">
      <Topbar />
      <h1>Home</h1>
    </div>
  );
}


export default Home;