import React from 'react';

const Backdrop = () => {

    const handleClick = () => {

    // PROBLEM: Updates page everytime I close the nav
        let {
            origin,
            pathname
        } = document.location

        document.location = origin + pathname;
    }

    return (

        <div id="backdrop" onClick={handleClick}></div>
    );
}

export default Backdrop;
