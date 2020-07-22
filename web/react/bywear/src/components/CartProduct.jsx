import React from 'react'

export default function CartProduct({productId, cart, merchList}) {
    return (
        <>
            {
              merchList.map(obj => 
                (obj.id === productId) ? (
                <div key={`${productId}-${cart[productId]}`} className="cart__product">
                    <div className="cart__product-main flex">
                      <img className="cart__product-img" src={obj.img} alt="cart product"/>
                      <p className="cart__product-name">{obj.name} </p>
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
