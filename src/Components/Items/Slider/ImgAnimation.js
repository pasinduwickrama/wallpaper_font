import React from 'react'
import Slider from "react-slick";
import logo2 from '../../../img/2.jpg';
import logo3 from '../../../img/4.jpg';
import logo4 from '../../../img/5.jpg';
import logo5 from '../../../img/7.jpg';
import logo6 from '../../../img/9.jpg';
import logo7 from '../../../img/1.jpeg';

import logo9 from '../../../img/6.jpeg';
const ImgAnimation = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='cc'>
    <Slider {...settings}>
          <div className='img_cus'>
                <img src={logo2} alt='' />
          </div>

          <div className='img_cus'>
          <img src={logo3} alt='' />
          </div>

          <div className='img_cus'>
          <img src={logo4} alt='' />
          </div>

          <div className='img_cus'>
          <img src={logo5} alt='' />
          </div>

          <div className='img_cus'>
          <img src={logo6} alt='' />
          </div>

          <div className='img_cus'>
          <img src={logo7} alt='' />
          </div>

          <div className='img_cus'>
          <img src={logo4} alt='' />
          </div>

          <div className='img_cus'>
          <img src={logo9} alt='' />
          </div>

          <div className='img_cus'>
          <img src={logo3} alt='' />
          </div>
         
          
    </Slider>
  </div>
  )
}

export default ImgAnimation