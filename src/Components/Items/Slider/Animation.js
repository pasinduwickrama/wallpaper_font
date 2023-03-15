import React from 'react'
import Slider from "react-slick";

const Animation = () => {
  
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
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
    <div className='c'>
    <Slider {...settings}>
          <div className='button_cus'>
                <button>Ball</button>
          </div>
          <div className='button_cus'>
                <button>Ball</button>
          </div>
          <div className='button_cus'>
                <button>Ball</button>
          </div>
          <div className='button_cus'>
                <button>Ball</button>
          </div>
          <div className='button_cus'>
                <button>Ball</button>
          </div>
          <div className='button_cus'>
                <button>Ball</button>
          </div>
          <div className='button_cus'>
                <button>Ball</button>
          </div>
          <div className='button_cus'>
                <button>Ball</button>
          </div>
          <div className='button_cus'>
                <button>Ball</button>
          </div>
          <div className='button_cus'>
                <button>Ball</button>
          </div>
          
    </Slider>
  </div>
  )
}

export default Animation