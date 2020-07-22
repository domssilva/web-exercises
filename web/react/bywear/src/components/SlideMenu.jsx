import React from 'react';
import { Link } from 'react-router-dom';

import CartProduct from './CartProduct';

const SlideMenu = ({version, cart, setCart, merchList}) => {

  let cartProduct = '';
  let total = 0;

  try {
    cartProduct = Object.keys(cart).map(function(key) {
      return (
        <CartProduct 
          key={`${key}`}
          productId={key} 
          cart={cart} 
          merchList={merchList}
        />
      )
    });
  } catch(error) {
    console.log(error);
  }

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
        <div className="cart__product-container">
          {cartProduct}
        </div>
        <div className="cart__action">
          <button 
            className="cart__action-erase btn"
            onClick={() => {setCart({})}}
          >
            svuota carrello
          </button>
          <span className="cart__action-total">€ {total}</span>
        </div>
      </div>
    </nav>
  )
  
}
export default SlideMenu;
