import React from 'react';

import Header from '../components/Header';
import Map from '../components/Map';
import Navigation from '../components/Navigation';

export default function Location() {
    return (
        <div className="container">
            <Map/>
            <Navigation/>
        </div>
    )
}
