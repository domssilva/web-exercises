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
        editProductQtd,
        removeProduct,
    } = props;

    return (
        <div className="container">
            <Map/>
            <Navigation 
                cart={cart} 
                total={total} 
                setTotal={setTotal} 
                merch={merch} 
                setCart={setCart}
                editProductQtd={editProductQtd}
                removeProduct={removeProduct}
            />
        </div>
    )
}

export default Location;
