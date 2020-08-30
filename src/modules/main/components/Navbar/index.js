import React from 'react';
import { Link } from 'react-router-dom';

import DcuLogo from 'prosearch-images/dcu-logo.png';
import GitHubLogo from 'prosearch-images/github-logo.png';

import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='main-navbar'>
      <div className='main-navbar-nav-items'>
        <div className='main-navbar-nav-item right-nav home-link'>
          <Link to='/'>
            <img src={DcuLogo} alt='dcu logo' />
          </Link>
        </div>
        <div className='main-navbar-nav-item about-link'>
          <Link to='/about'>About</Link>
        </div>
        <div className='main-navbar-nav-item'>
          <span className='main-navbar-separator'>•</span>
        </div>
        <div className='main-navbar-nav-item github-link'>
          <a
            href='https://github.com/teabolt/dcu_project_search_frontend'
            rel='noreferrer noopener'
            target='_blank'
          >
            <img src={GitHubLogo} alt='project github link' />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
