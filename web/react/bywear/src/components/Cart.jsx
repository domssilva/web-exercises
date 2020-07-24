import React from 'react';

import CartProduct from './CartProduct';

const Cart = (props) => {

    const {
        cart,
        total,
        merch,
        emptyCart,
        removeProduct,
    } = props;

    const getRandomNumber = () => Math.floor(Math.random() * 10000);

    let cartItems = [];
    for (let numericId in cart) {
        merch.forEach(product => {
            if (product.id === numericId) {
                cartItems.push(product);
            }
        });
    }

    return (
        <nav className='navigation__nav' id='cart' role='navigation'>
            <a href='#' className='navigation__link navigation__link--close flex-end'>X</a>
            <div className="cart__container">
                <div className="cart__product-container">
                    {
                        cartItems.map(productObj => (
                            <CartProduct 
                                key={`${productObj.id}-${getRandomNumber()}`}
                                props={props} 
                                productObj={productObj}
                                removeProduct={removeProduct}
                            />
                        ))
                    }
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
    );
}

export default Cart;
