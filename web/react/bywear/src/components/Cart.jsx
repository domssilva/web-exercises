import React from 'react';

const Cart = (props) => {

    const {
        cartProduct,
        total,
        emptyCart
    } = props;

    return (
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
    );
}

export default Cart;
