import React from 'react';
import { Link } from 'react-router-dom';

import icons from '../assets/imgs/icons.svg';

const Navigation = () => {
  return (
    <section className="navigation">
      <a href='#menu' className='navigation__anchor'>
        <svg className='navigation__icon'>
          <use xlinkHref={`${icons}#icon-list`}/>
        </svg>
      </a>
      <nav className='navigation__nav' id='menu' role='navigation'>
        <a href='#' className='navigation__link navigation__link--close flex-end'>X</a>
        <Link to='/' className='navigation__link'>home</Link>
        <Link to='/store' className='navigation__link'>negozio</Link>
        <Link to='/location' className='navigation__link'>trovaci</Link>
      </nav>
    </section>
  );
}
 
export default Navigation;