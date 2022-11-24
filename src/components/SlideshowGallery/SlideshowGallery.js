import bgimg from '../../images/bg-pmbb.jpg';
import bgimg2 from '../../images/bg-pmbb2.jpg';
import bgimg3 from '../../images/bg-pmbb3.jpg';
import bgimg4 from '../../images/bg-pmbb4.jpg';

import React, { useState } from 'react';
import './SlideshowGallery.css';
import Carousel from 'react-bootstrap/Carousel';

export const SlideshowGallery = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bgimg}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="text-presentation-container img1">
            <h3>Bienvenidos a Pañalera Mi Bebé!</h3>
            <p>Pañales, ropa y accesorios para los más pequeñitos.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bgimg2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <div className="text-presentation-container">
            <h3>¿Ya sabés que pañal vas a elegir para tu recién nacido?</h3>
            <p>En pañalera Mi Bebé, podés contar con diversas marcas.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bgimg3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className="text-presentation-container">
            <h3>Ropa para tu pequeño/a!</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bgimg4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className="text-presentation-container">
            <h3>También contamos con los mejores tejidos!</h3>
            <p>
              Desde gorros hasta peluches!
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}