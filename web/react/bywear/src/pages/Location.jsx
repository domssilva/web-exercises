import React from 'react';

import Map from '../components/Map';
import Navigation from '../components/Navigation';

const Location = (props) => {

    const {
        merch,
        cart,
        setCart,
        total,
        setTotal,
        removeProduct,
    } = props;

    return (
        <div className="container">
            <Map/>
            <Navigation 
                cart={cart} 
                setCart={setCart}
                total={total} 
                setTotal={setTotal} 
                merch={merch} 
                removeProduct={removeProduct}
            />
        </div>
    )
}

export default Location;
