// import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import g_1 from '../assets/g_1.jpg';
import g_2 from '../assets/g_2.jpg';
import g_4 from '../assets/g_4.jpg';
import C2forAbout from '../Card/C2forAbout';

const About = () => {
  return (
    <>
{/* curosol for about women */}
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
              <img src={g_1} alt="Male 1" className="max-h-[500px] object-cover w-full" />
            </div>
            <div>
              <img src={g_2} alt="Watch 2" className="max-h-[500px] object-cover w-full" />
            </div>
            <div>
              <img src={g_4} alt="Male 4" className="max-h-[500px] object-cover w-full" />
            </div>
          </Carousel>
        </div>
        </div>
        {/* cards */}
        <C2forAbout/>
      
    </>
  )
}

export default About;
