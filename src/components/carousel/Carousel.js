import React from 'react'
import carouselStyle from './carousel.module.css'
import arrowLeft from '../img/arrowl.png'
import arrowRight from '../img/arrowr.png'
import podcastCover from '../img/podcastcover.jpg'



function Carousel() {
  return (
    <div className={carouselStyle.carousel}>
      <div className={carouselStyle.left}>
        <div className={carouselStyle.arrows}>
          <img className={carouselStyle.arrowLeft} src={arrowLeft} alt="" />
          <img className={carouselStyle.arrowRight} src={arrowRight} alt="" />
        </div>
        <div>
          <h3>Podcast Name</h3>
          <h1>Episode name Episode name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ullam quasi error quisquam vel vero nulla repellat sint! Accusamus voluptas voluptatibus voluptatem libero earum laborum?
          </p>
          <span>date</span> <span>ep length</span>
        </div>
      </div>
      <div>
        <img className={carouselStyle.podCover} src={podcastCover} alt="" />
      </div>

    </div>
  )
}

export default Carousel