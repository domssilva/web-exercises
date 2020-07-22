import React from 'react'

export default function CartProduct({productId, cart, setCart, removeProduct, merchList}) {

    const getRandomNumber = () => Math.floor(Math.random() * 10000);

    return (
        <>
            {
              merchList.map(obj => 
                (obj.id === productId) ? (
                <div key={`${productId}-${cart[productId]}-${getRandomNumber()}`} className="cart__product">
                    <div className="cart__product-main flex">
                    <button 
                        className="x-red"
                        onClick={() => {removeProduct(productId)}}
                    >
                        X
                    </button>
                      <img className="cart__product-img" src={obj.img} alt="cart product"/>
                      <p className="cart__product-name"> {obj.name} </p>
                        <p className="cart__product-qtd">
                            x
                            <span className="cart__product-qtd-size">
                                {cart[productId]}
                            </span>
                        </p>
                    </div>
                    <p className="cart__product-price">€ {obj.price}/unità</p>
                </div>
                ): '')
            }
        </>
    )
}
