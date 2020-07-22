import React, {useState, useEffect} from 'react';

// this data will be fetched from contentful
import merchList from '../components/Product.data';
// this data will be fetched from contentful

import Shop from '../components/Shop';
import Navigation from '../components/Navigation';

 const Location = () => {

    const [cart, setCart] = useState({});
    const [total, setTotal] = useState(0);
    const [merch, setMerchList] = useState(merchList);

    useEffect(() => {
        let prodQtd, prodPrice;
        let newTotal = total;
        Object.keys(cart).map(id => {
            merch.forEach(prod => {
                if (prod.id === id) {
                    prodPrice = prod.price;
                    prodQtd = cart[id];
                    newTotal += prodPrice * prodQtd;
                }
            });
        });

        setTotal(newTotal);

    }, [cart]);

    return (
        <div className="container">
            <Shop merchList={merch} cart={cart} setCart={setCart}/>
            <Navigation total={total} setTotal={setTotal} merchList={merch} cart={cart} setCart={setCart}/>
        </div>
    );
}

export default Location;