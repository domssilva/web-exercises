import React, {useState, useEffect} from 'react';

// this data will be fetched from contentful
import merchList from '../components/Product.data';
// this data will be fetched from contentful

import Shop from '../components/Shop';
import Navigation from '../components/Navigation';

 const Store = () => {

    const [cart, setCart] = useState({});
    const [total, setTotal] = useState(0);
    const [merch, setMerchList] = useState(merchList);

    const removeProduct = (id) => {
        let newCart = cart;

        for (const [productId, value] of Object.entries(cart)) {
            if (productId === id) {
                delete newCart[productId];
            }
          }
        
        setCart(newCart);
        calculateTotalCartPrice();

        if (Object.keys(cart).length === 0) {
            setCart({});
            setTotal(0);
        }
    }

    const calculateTotalCartPrice = () => {
        let prodQtd, prodPrice;
        let newTotal = 0;

        console.log(cart);
        Object.keys(cart).map(id => {
            console.log(id);
            merch.forEach(prod => {
                if (prod.id === id) {
                    prodPrice = prod.price;
                    prodQtd = cart[id];
                    newTotal += prodPrice * prodQtd;
                }
            });
        });
    
        setTotal(newTotal);
    }

    useEffect(() => {
        calculateTotalCartPrice();
    }, [cart]);

    return (
        <div className="container">
            <Shop merchList={merch} cart={cart} setCart={setCart}/>
            <Navigation 
                total={total} 
                setTotal={setTotal} 
                merchList={merch} 
                cart={cart} 
                setCart={setCart}
                removeProduct={removeProduct}
            />
        </div>
    );
}

export default Store;