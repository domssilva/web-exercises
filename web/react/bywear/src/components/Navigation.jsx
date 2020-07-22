import React from 'react';

import SlideMenu from './SlideMenu';
import icons from '../assets/imgs/icons.svg';

const Navigation = (props) => {

  const {
    cart,
    setCart,
    merchList,
    total,
    setTotal
  } = props;

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
      <SlideMenu 
        total={total}
        setTotal={setTotal}
        cart={cart}
        setCart={setCart}
        merchList={merchList}
        version="navigation"
      />
      <SlideMenu 
        total={total}
        setTotal={setTotal}
        cart={cart}
        setCart={setCart}
        merchList={merchList}
        version="cart"
      />
    </section>
  );
}
 
export default Navigation;