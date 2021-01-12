import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <header>
      {/* <img className='logo' src='./images/ZachLogo2.png'></img> */}
      <h1 className='logo'>ZachBach</h1>
      <nav>
        <ul className='nav-item'>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='services'>Services</Link>
          </li>
        </ul>
      </nav>
      <a className='contact-btn' href='#'>
        <button>Contact Me</button>
      </a>
    </header>
  );
}

export default Nav;
