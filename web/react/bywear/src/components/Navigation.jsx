import React from 'react';

import SideNav from './SideNav';
import Cart from './Cart';
import icons from '../assets/imgs/icons.svg';

const Navigation = (props) => {

  const {
    cart,
    setCart,
    merch,
    total,
    setTotal,
    editProductQtd,
    removeProduct,
  } = props;

  const emptyCart = () => {
    setTotal(0);
    setCart({});
  }

  return (
    <section className="navigation">
      <a href='#menu' className='navigation__anchor'>
        <svg className='navigation__icon'>
          <use xlinkHref={`${icons}#icon-list`}/>
        </svg>
      </a>
      <a href='#cart' className='navigation__cart'>
        <svg className='navigation__icon'>
          <use xlinkHref={`${icons}#icon-cart`}/>
        </svg>
      </a>
      <SideNav props={props}/>
      <Cart
        cart={cart}
        total={total}
        merch={merch}
        emptyCart={emptyCart}
        editProductQtd={editProductQtd}
        removeProduct={removeProduct}
      />
    </section>
  );
}
 
export default Navigation;