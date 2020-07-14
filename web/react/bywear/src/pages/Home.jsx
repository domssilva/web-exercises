import React from 'react'

import Header from '../components/Header';
import Gallery from '../components/Gallery';
import Navigation from '../components/Navigation';

export default function Home() {
    return (
        <div className="container">
            <Header/>
            <Gallery/>
            <Navigation/>
        </div>
    )
}
