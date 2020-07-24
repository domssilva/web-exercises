import React from 'react';
import {Link} from 'react-router-dom';

import HeaderNav from './HeaderNav';
import icons from '../assets/imgs/icons.svg';

const Header = () => {
  return (
    <>
    <section className='content'>
    <HeaderNav/>
    <div className='header__content'>

      <section className='header__social'>
        <a href='#'>
          <svg className='header__social-icon'>
            <use xlinkHref={`${icons}#icon-twitter`}/>
          </svg>
        </a>
        <a href='#'>
          <svg className='header__social-icon'>
            <use xlinkHref={`${icons}#icon-instagram`}/>
          </svg>
        </a>
        <a href='#'>
          <svg className='header__social-icon'>
            <use xlinkHref={`${icons}#icon-facebook`}/>
          </svg>
        </a>
      </section>
      <section className='header__main'>
        <h1 className='header__title'>
          <span className='orange'>Streetwear</span>
          <br/>
          <span className='white'>guide</span>
          <span className='orange'>20'</span>
        </h1>
        <p className='header__text'>
          La tua guida personale per l'estate 2020 &minus; stili bywear che sono veramente lit.
        </p>
      </section>
    </div>

    <Link className="btn btn--white" to="/store">Negozio</Link>
  </section>
  </>
  );
}
 
export default Header;