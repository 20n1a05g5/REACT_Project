// import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import j_4 from '../assets/j_4.jpg';
import j_2 from '../assets/j_2.jpg';
import j_1 from '../assets/j_1.jpg';
import CforJew from '../Card/CforJew';

const Jowellary = () => {
  return (
    <div>
          {/* Carousel */}
      <div className="relative">
        {/* Add padding to push the carousel down */}
        <div className="">
          <Carousel
            autoPlay={true}
            interval={2000}
            showArrows={false}
            showThumbs={false}
            infiniteLoop={true}
          >
            <div>
              <img src={j_4} alt="Male 1" className="max-h-[500px] object-cover w-full" />
            </div>
            <div>
              <img src={j_2} alt="Watch 2" className="max-h-[500px] object-cover w-full" />
            </div>
            <div>
              <img src={j_1} alt="Male 4" className="max-h-[500px] object-cover w-full" />
            </div>
          </Carousel>
        </div>
      </div>
      {/* cards reted to jew */}
    <CforJew/>
      
    </div>
  )
}

export default Jowellary
