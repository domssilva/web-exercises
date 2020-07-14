import React from 'react'

import HeaderNav from './HeaderNav';

/*
    if route === /store : import specific css 
    which extends the layout to the entire page
*/

function Shop() {
    return (
        <section className='content content-store'>
            <HeaderNav/>
            <div className="content-store__container">
                <div className="box"></div>
            </div>
        </section >
    )
}

export default Shop;
