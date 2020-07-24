import React from 'react'

import Header from '../components/Header';
import Gallery from '../components/Gallery';
import Navigation from '../components/Navigation';

const Home = (props) => {

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
            <Header/>
            <Gallery/>
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

export default Home;
