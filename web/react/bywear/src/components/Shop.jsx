import React, { useState } from 'react'

import HeaderNav from './HeaderNav';
import Product from './Product';

/*
    if route === /store : import specific css 
    which extends the layout to the entire page
*/

const merchList = [
    {
        name: 'T-shirt',
        img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
        price: '10',
        id: '123',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, maiores.',
    },
];

const Shop = () => {

    const [merch, setMerch] = useState(merchList);

    return (
        <section className='content content-store'>
            <HeaderNav/>
            <div className="content-store__cell">
                {
                    merch.map(({name, img, price, id, description}) => (
                        <Product 
                            name={name} 
                            img={img} 
                            id={id}
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
