import React, {useState} from 'react';

import Shop from '../components/Shop';
import Navigation from '../components/Navigation';

 const Location = () => {

    const [cart, setCart] = useState({});

    return (
        <div className="container">
            <Shop cart={cart} setCart={setCart}/>
            <Navigation cart={cart} setCart={setCart}/>
        </div>
    );
}

export default Location;