import React from 'react';
import { Link } from 'react-router-dom';

import Anchor from 'prosearch-components/Anchor';
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
          <Anchor
            href='https://github.com/teabolt/dcu_project_search_frontend'
            target='_blank'
          >
            <img src={GitHubLogo} alt='project github link' />
          </Anchor>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
