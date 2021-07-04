import React from 'react'
import './Carousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export default function Carousel() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img className="w-100" src="./img/Carousel/hinh1.jpeg" />
          </div>
          <div>
            <img className="w-100" src="./img/Carousel/hinh2.jpeg" />
          </div>
          <div>
            <img className="w-100" src="./img/Carousel/hinh3.jpeg" />
          </div>
        </Slider>
      </div>
    );
}
