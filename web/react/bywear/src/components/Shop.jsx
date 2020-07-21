import React from 'react';

import HeaderNav from './HeaderNav';
import Product from './Product';

const Shop = (props) => {

    return (
        <section className='content content-store'>
            <HeaderNav/>
            <div className="content-store__cell">
                {
                    props.merchList.map(({name, img, price, rating, id, description}) => (
                        <Product 
                            key={id}
                            name={name} 
                            img={img} 
                            id={id}
                            rating={rating}
                            price={price}
                            description={description}
                            cart={props.cart}
                            setCart={props.setCart}
                        />
                    ))
                }
            </div>
        </section >
    )
}

export default Shop;
