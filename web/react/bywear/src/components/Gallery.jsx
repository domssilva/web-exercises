import React from 'react';
import { useEffect } from 'react';

import img1 from '../assets/imgs/models.jpg';
import img2 from '../assets/imgs/girl.jpg';
import img3 from '../assets/imgs/models2.jpg';
import img4 from '../assets/imgs/guy.jpg';

const Gallery = () => {

  useEffect(() => {
    galleryCode();
  }, []);

  return (
    <section className='photo'>
      <div className='photo__container' id='gallery'>
        <img src={img1} alt='clothing' className='photo__img selected'/>
        <img src={img2} alt='clothing' className='photo__img'/>
        <img src={img3} alt='clothing' className='photo__img'/>
        <img src={img4} alt='clothing' className='photo__img'/>
      </div>
    </section>
  );
}

function galleryCode () {
  let photos = document.getElementById('gallery').children;

  let time = 4000;
  let idx = 0;
  let maxIdx = photos.length;

  function changeClass() {

    
    photos[idx].classList.remove('selected')
    idx++;
    
    if (idx >= maxIdx) {
      idx = 0;
    }

    photos[idx].classList.add('selected')

  }

  function slideGallery() {
    setInterval(changeClass, time);
  }

  window.addEventListener('load', slideGallery);
}

export default Gallery;
