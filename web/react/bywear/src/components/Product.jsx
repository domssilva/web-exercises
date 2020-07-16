import React from 'react';
import { useEffect } from 'react';
import icons from '../assets/imgs/icons.svg';

export default function Product({name, img, price, rating, id, description}) {

    return (
    <div className="product__container">
        <div className="product__cta">
            <img className="product__cta-img" src={img} alt="clothes"/>
            <div className="product__cta-price">{price} €</div>
            <form action={`#${id}`} className="product__cta-submit">
                <input type="submit" className="btn" value="aggiungi al carrello"/>
            </form>
        </div>
        <div className="product__info">
            <h3 className="product__info-name">{name}</h3>
            <div className="product__info-rating">
                {
                    Array(rating).fill('x').map(num => 
                        <svg key={num} className='header__social-icon'>
                           <use xlinkHref={`${icons}#icon-star-full`}/>
                        </svg>
                    )
                }
            </div>
            <p className="product__info-about">
                {description}
            </p>
            <div className="product__info-sizes">
                <div className="product__info-sizes-box">xs</div>
                <div className="product__info-sizes-box">s</div>
                <div className="product__info-sizes-box selected">m</div>
                <div className="product__info-sizes-box">l</div>
                <div className="product__info-sizes-box">xl</div>
            </div>
        </div>
    </div>
    )
}
