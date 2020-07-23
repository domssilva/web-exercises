import React from 'react';

import Shop from '../components/Shop';
import Navigation from '../components/Navigation';

 const Store = (props) => {

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
            <Shop merchList={merch} cart={cart} setCart={setCart}/>
            <Navigation 
                cart={cart} 
                total={total} 
                setTotal={setTotal} 
                merchList={merch} 
                setCart={setCart}
                removeProduct={removeProduct}
            />
        </div>
    );
}

export default Store;