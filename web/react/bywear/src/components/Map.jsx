import React from 'react'
//import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import HeaderNav from './HeaderNav';

export default function LocationMap() {

    let mapPhoto = 'https://www.google.com/maps/about/images/mymaps/mymaps-desktop-16x9.png';

    return (
        <>
            <section className='content content-location'>
                <HeaderNav/>
                <div className='map'>
                    <div className="map__container">
                        <img 
                            id='map'
                            src={mapPhoto} alt="map"/>
                    </div>
                    <div className="location">
                        <h3 className="location__address">
                            <span className="orange">street 123, AC 00</span>
                            <br/>
                            <span className="white">come visit us</span>
                        </h3>
                        <p className="location__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro optio quisquam libero quis soluta reiciendis.
                        </p>
                        <br/>
                        <p className="location__text location__text--highlight">
                            da Lunedì a Sabato
                            <br/>
                            9:00 &minus; 21:00
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
