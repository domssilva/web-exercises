import React from 'react'

export default function Product({name, img, price, id, description}) {
    return (
    <div className="product__container">
        <div className="product__cta">
            <img className="product__cta-img" src={img} alt="clothes"/>
            <div className="product__cta-price">{price}€</div>
            <form action={`#{id}`}>
                <input type="submit" className="product__cta-btn btn" value="add to cart"/>
            </form>
        </div>
        <div className="product__info">
            <h3 className="product__info-name">{name}</h3>
            <div className="product__info-sizes"></div>
            <div className="product__info-colors"></div>
            <p className="product__info-about">
                {description}
            </p>
        </div>
    </div>
    )
}
