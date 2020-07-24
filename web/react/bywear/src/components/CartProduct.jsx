import React from 'react'

const CartProduct = (props) => {

    const {
        cart,
        productId,
        removeProduct,
        productObj,
    } = props;

    const getRandomNumber = () => Math.floor(Math.random() * 10000);

    return (
        <div key={`${getRandomNumber()}`} className="cart__product">
            <div className="cart__product-main flex">
            <button 
                className="x-red"
                onClick={() => {removeProduct(productId)}}
            >
                X
            </button>
                <img className="cart__product-img" src={productObj.img} alt="cart product"/>
                <p className="cart__product-name"> {productObj.name} </p>
                <p className="cart__product-qtd">
                    x
                    <span className="cart__product-qtd-size">
                        cart[productId]
                    </span>
                </p>
            </div>
            <p className="cart__product-price">€ {productObj.price}/unità</p>
        </div>
    );
}

export default CartProduct;
