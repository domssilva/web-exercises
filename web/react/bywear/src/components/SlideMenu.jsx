import React from 'react';
import { Link } from 'react-router-dom';

export default function SlideMenu({version}) {

    return (version === 'navigation' ) ?
     (
      <nav className='navigation__nav' id='menu' role='navigation'>
        <a href='#' className='navigation__link navigation__link--close flex-end'>X</a>
        <Link to='/' className='navigation__link'>home</Link>
        <Link to='/store' className='navigation__link'>negozio</Link>
        <Link to='/location' className='navigation__link'>trovaci</Link>
      </nav>
    ) : (
        <nav className='navigation__nav' id='cart' role='navigation'>
        <a href='#' className='navigation__link navigation__link--close flex-end'>X</a>
        <p>cart!!!</p>
      </nav>
    )
}
