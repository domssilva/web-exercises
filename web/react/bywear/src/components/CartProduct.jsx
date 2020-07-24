import React from 'react'

const CartProduct = (props) => {

    const {
        productObj,
        removeProduct,
    } = props;

    return (
        <div className="cart__product">
            <div className="cart__product-main flex">
            <button 
                className="x-red"
                onClick={() => {removeProduct(productObj.id)}}
            >
                X
            </button>
                <img className="cart__product-img" src={productObj.img} alt="cart product"/>
                <p className="cart__product-name"> {productObj.name} </p>
                <p className="cart__product-qtd">
                    x
                    <span className="cart__product-qtd-size">
                        {productObj.qtd}
                    </span>
                </p>
            </div>
            <p className="cart__product-price">€ {productObj.price}/unità</p>
        </div>
    );
}

export default CartProduct;
