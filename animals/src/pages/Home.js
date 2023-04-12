import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
    <div>
        <div className='nav'>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Animals">Animals</NavLink>
          </li>
          <li>
            <NavLink to="/Birds">Birds</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
        </ul>
      </nav>
      </div>
      <div className='container'>
        <div className='animals'>
            <div className='link'>
            <NavLink to="/Animals">Animals</NavLink>
            </div>
        </div>
        <div className='birds'>
        <div className='link'>
            <NavLink to="/Birds">Birds</NavLink>
            </div>
        </div>
            </div>
        </div>
    );
};

export default Home;