import React from 'react';
import { Link } from 'react-router-dom';

import DcuLogo from 'prosearch-images/dcu-logo.png';
import GitHubLogo from 'prosearch-images/github-logo.png';

import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='main-navbar'>
      <ul className='main-navbar-nav-items'>
        <li className='main-navbar-nav-item right-nav home-link'>
          <Link to='/'>
            <img src={DcuLogo} alt='dcu logo' />
          </Link>
        </li>
        <li className='main-navbar-nav-item about-link'>
          <Link to='/about'>About</Link>
        </li>
        <li className='main-navbar-nav-item'>
          <span className='main-navbar-separator'>•</span>
        </li>
        <li className='main-navbar-nav-item github-link'>
          <a
            href='https://github.com/teabolt/dcu_project_search_frontend'
            rel='noreferrer noopener'
            target='_blank'
          >
            <img src={GitHubLogo} alt='project github link' />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
