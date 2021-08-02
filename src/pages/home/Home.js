import React from 'react';
import './Home.scss';

import Topbar from '../../components/topbar/Topbar';
import Leftbar from '../../components/leftbar/Leftbar';
import Newsfeed from '../../components/newsfeed/Newsfeed';
import Rightbar from '../../components/rightbar/Rightbar';

const Home = ({ user, setUser }) => {
  return (
    <div className="home">
      <Topbar currentUser={user} setUser={setUser} />
      <div className="home__body">
        <Leftbar currentUser={user} />
        <Newsfeed currentUser={user} />
        <Rightbar currentUser={user} />
      </div>
    </div>
  );
}


export default Home;