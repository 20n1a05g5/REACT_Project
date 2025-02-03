// import React from 'react'
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img_1 from '../assets/img_1.jpg';
import img_2 from '../assets/img_2.jpg';
import img_3 from '../assets/img_3.jpg';
const Courosel1 = () => {
    return (
        <div data-aos="zoom-in">
        <Carousel autoPlay={true} interval={2000} showArrows={false} showThumbs={false} infiniteLoop={true}>
            <div>
                <img src={img_1}/>
               
            </div>
            <div>
                <img src={img_2} />
                
            </div>
            <div>
                <img src={img_3} />
                
            </div>
        </Carousel>
        </div>
    );
}

export default Courosel1;
