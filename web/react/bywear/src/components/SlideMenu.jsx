import React from 'react';
import { Link } from 'react-router-dom';

const SlideMenu = ({version, cart}) => {

  let tifOptions = Object.keys(cart).map(function(key) {
    return (
      <p key={key}>
          <span>qtd:{cart[key]}</span>
          <span>item: {key}</span>
      </p>
    )     
  });

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
      <div className="cart__container">
        {tifOptions}
      </div>
    </nav>
  )
  
}
export default SlideMenu;
