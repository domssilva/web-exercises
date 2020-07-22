import React from 'react';
import { Link } from 'react-router-dom';

import CartProduct from './CartProduct';


const SlideMenu = ({version, total, setTotal, cart, setCart, merchList}) => {

  let cartProduct = '';

  const emptyCart = () => {
    setTotal(0);
    setCart({});
  }

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
          {
            (total > 0) ? (
              <>
                <button 
                  className="cart__action-erase btn"
                  onClick={() => {emptyCart()}}
                >
                  svuota carrello
                </button>
                <span className="cart__action-total">€ {parseFloat(total).toFixed(2)}</span>
              </>
            ) : 'carrello vuoto'
          }
        </div>
      </div>
    </nav>
  )
  
}
export default SlideMenu;
