// import Carousel from './Courosel1';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import im_5 from '../assets/im_5.webp';
import wacth_2 from '../assets/wacth_2.webp';
import men_1 from '../assets/men_1.jpg';
import Cforhome from '../Card/Cforhome';

const Home = () => {
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
              <img src={im_5} alt="Male 1" className="max-h-[500px] object-cover w-full" />
            </div>
            <div>
              <img src={wacth_2} alt="Watch 2" className="max-h-[500px] object-cover w-full" />
            </div>
            <div>
              <img src={men_1} alt="Male 4" className="max-h-[500px] object-cover w-full" />
            </div>
          </Carousel>
        </div>
      </div>
      <Cforhome/>
    </div>
    // cards
   
  );
};

export default Home;
