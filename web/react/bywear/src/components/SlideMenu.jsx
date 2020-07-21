import React from 'react';
import { Link } from 'react-router-dom';

const SlideMenu = ({version, cart, setCart, merchList}) => {

  let cartProduct = '';

  try {
    cartProduct = Object.keys(cart).map(function(key) {
      return (
        <div className="cart__product">
            {
              merchList.map(obj => 
                (obj.id === key) ? (
                  <>
                    <div className="flex">
                      <img className="cart__img" src={obj.img} alt="cart product"/>
                      <p>{obj.name}</p>
                    </div>
                    <p>€ {obj.price}</p>
                    <p>qtd: {cart[key]}</p>
                  </>
                ): '')
            }
        </div>
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
        {cartProduct}
          <button 
            className="cart__erase btn"
            onClick={() => {setCart({})}}
          >
            svuota carrello
          </button>
      </div>
    </nav>
  )
  
}
export default SlideMenu;
