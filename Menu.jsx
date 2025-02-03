// import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import e_1 from '../assets/e_1.jpg';
import e_2 from '../assets/e_2.jpg';
import e_3 from '../assets/e_3.jpg';
import Cforele from '../Card/Cforele';

const Menu = () => {
  return (
    <div>
     
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
              <img src={e_1} alt="Male 1" className="max-h-[500px] object-cover w-full" />
            </div>
            <div>
              <img src={e_2} alt="Watch 2" className="max-h-[500px] object-cover w-full" />
            </div>
            <div>
              <img src={e_3} alt="Male 4" className="max-h-[500px] object-cover w-full" />
            </div>
          </Carousel>
        </div>
        </div>
        <Cforele/>
    </div>
  )
}

export default Menu;
