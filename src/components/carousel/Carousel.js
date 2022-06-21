import React from 'react'
import carouselStyle from './carousel.module.css'
import arrowLeft from '../img/arrowl.png'
import arrowRight from '../img/arrowr.png'
import podcastCover from '../img/podcastcover.jpg'
import playIcon from '../img/play.png'



function Carousel() {
  return (
    <div className={carouselStyle.carousel}>
      <div className={carouselStyle.left}>
        <div className={carouselStyle.arrows}>
          <img className={carouselStyle.arrowLeft} src={arrowLeft} alt="" />
          <img className={carouselStyle.arrowRight} src={arrowRight} alt="" />
        </div>
        <div className={carouselStyle.info}>
          <h3>Podcast Name</h3>
          <h1>Episode name Episode name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ullam quasi error quisquam vel vero nulla repellat sint! Accusamus voluptas voluptatibus voluptatem libero earum laborum?
          </p>
          <span>45 mins</span>
          <button className={carouselStyle.play}>Play
          <img className={carouselStyle.playIcon} src={playIcon} alt="" />
          </button>
        </div>
      </div>
      <div>
        <img className={carouselStyle.podCover} src={podcastCover} alt="" />
      </div>

    </div>
  )
}

export default Carousel