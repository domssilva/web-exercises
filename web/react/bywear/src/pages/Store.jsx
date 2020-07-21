import React, {useState, useEffect} from 'react';

// this data will be fetched from contentful
import merchList from '../components/Product.data';
// this data will be fetched from contentful

import Shop from '../components/Shop';
import Navigation from '../components/Navigation';

 const Location = () => {

    const [cart, setCart] = useState({});
    const [merch, setMerchList] = useState(merchList);

    useEffect(() => {
        //console.log(cart);
    }, [cart]);

    return (
        <div className="container">
            <Shop merchList={merch} cart={cart} setCart={setCart}/>
            <Navigation merchList={merch} cart={cart} setCart={setCart}/>
        </div>
    );
}

export default Location;