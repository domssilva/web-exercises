import React from 'react';

import Cart from './Cart';
import SideNav from './SideNav';
import CartProduct from './CartProduct';

const SlideMenu = ({version, total, setTotal, cart, setCart, removeProduct, merchList}) => {

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
          setCart={setCart}
          merchList={merchList}
          removeProduct={removeProduct}
        />
      )
    });
  } catch(error) {
    console.log(error);
  }

  return (version === 'navigation' ) ?
    ( <SideNav/> ) : (
      <Cart
        total={total}
        cartProduct={cartProduct}
        emptyCart={emptyCart}
      />
    )
}
export default SlideMenu;
