import React from 'react';

import HeaderNav from './HeaderNav';
import Product from './Product';

// this data will be fetched from contentful
import merchList from './Product.data';
// this data will be fetched from contentful

const Shop = (props) => {

    return (
        <section className='content content-store'>
            <HeaderNav/>
            <div className="content-store__cell">
                {
                    merchList.map(({name, img, price, rating, id, description}) => (
                        <Product 
                            key={id}
                            name={name} 
                            img={img} 
                            id={id}
                            rating={rating}
                            price={price}
                            description={description}
                        />
                    ))
                }
            </div>
        </section >
    )
}

export default Shop;
