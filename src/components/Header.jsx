import React from 'react';
import { Link } from 'react-scroll';
import mainImg from '../images/main-img.svg';

const Header = () => {
  return (
    <header>
      <div className='title-container'>
        <h1 className='main-title'>Committed</h1>
        <h3 className='subtitle'>a place for recruiters to find new talent</h3>
        <Link activeClass='active' to='search-container' spy={true} smooth={true} offset={0} duration={0}>
          <button className='main-btn'>Search Talent</button>
        </Link>
      </div>
      <div className='main-img-container'>
        <img className='main-img' src={mainImg} alt='person-coding' />
      </div>
    </header>
  );
};

export default Header;
