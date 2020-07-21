import React, {useState, useEffect} from 'react';

import Shop from '../components/Shop';
import Navigation from '../components/Navigation';

 const Location = () => {

    const [cart, setCart] = useState({});

    useEffect(() => {
        //console.log(cart);
    }, [cart]);

    return (
        <div className="container">
            <Shop cart={cart} setCart={setCart}/>
            <Navigation cart={cart} setCart={setCart}/>
        </div>
    );
}

export default Location;