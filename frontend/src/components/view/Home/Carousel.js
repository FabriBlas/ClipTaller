import Carousel from "react-multi-carousel";

/* Css */
import "react-multi-carousel/lib/styles.css";

import React from 'react'

/* Images */
import slide1 from '../../../img/Fredericksburg.png';
import slide2 from '../../../img/Enchanted Rock State Park.png';
import slide3 from '../../../img/Spring Wildflowers Viewing.png';
import slide4 from '../../../img/Pacific War Museum.png';
import slide5 from '../../../img/Wineries.png';

export default function carousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 90 // This is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      partialVisibilityGutter: 90 // This is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      partialVisibilityGutter: 90 // This is needed to tell the amount of px that should be visible.
    }
  }

  /* Actual state of carousel */
  const ButtonGroup = ({ next, previous, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;

    /* Class of previous button */
    const prevfun = currentSlide === 0 ? 'disable' : ''
    const prevclass = `prev btn-circle btn btn-light btn-carousel ${prevfun}`

    return (
      /* Previous and next carousel buttons */
      <div className="carousel-button-group">
        <button className={prevclass} onClick={() => previous()}>

          <i className="material-icons">keyboard_arrow_left
                </i>
        </button>
        <button className="next btn-circle btn btn-light btn-carousel" onClick={() => next()}>
          <i className="material-icons">keyboard_arrow_right
                </i>
        </button>

      </div>
    );
  };

  return (
    <div className="container-carousel">
      <Carousel
        /* Carousel parameters*/
        partialVisible={true}
        responsive={responsive}
        arrows={false}
        renderButtonGroupOutside={true}
        infinite
        autoPlay={true}
        customButtonGroup={<ButtonGroup />}
        className="carousel">
        {/* The carousel images should be added here*/}
        <img src={slide1} alt="Fredericksburg German Town"></img>
        <img src={slide2} alt="Enchanted Rock State Park"></img>
        <img src={slide3} alt="Spring Wildflowers Viewing"></img>
        <img src={slide4} alt="Pacific War Museum"></img>
        <img src={slide5} alt="Texas Hill Country Wineries"></img>
      </Carousel>
    </div>
  )
}
