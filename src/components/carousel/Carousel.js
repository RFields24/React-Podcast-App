import {React, useState} from 'react'
import carouselStyle from './carousel.module.css'
import arrowLeft from '../img/arrowl.png'
import arrowRight from '../img/arrowr.png'
// import podcastCover from '../img/podcastcover.jpg'
import playIcon from '../img/play.png'
import Player from '../player/Player.js'
import SpringIn from '../player/SpringIn.js'
import Shows from './../explore/fullcard.json'


function Carousel() {
  const show = Shows[0].podcasts[14]
  // const show = Shows[0].podcasts[14]
  // console.log(show)

  const [startAnimation, setStartAnimation] = useState(false);
  return (
    <div className={carouselStyle.carousel}>
      <div className={carouselStyle.left}>
        <div className={carouselStyle.arrows}>
          <img className={carouselStyle.arrowLeft} src={arrowLeft} alt="" />
          <img className={carouselStyle.arrowRight} src={arrowRight} alt="" />
        </div>
        <div className={carouselStyle.info}>
          <h1 className={carouselStyle.h2}>{show.title}</h1>
          <h3 className={carouselStyle.h3}>{show.publisher}</h3>
          <p>{show.description}</p>
          <span>45 mins</span>
          <button onClick={ function moveContent() {
            
            setStartAnimation(!startAnimation)}} 
            className={carouselStyle.play}>Play
          
          <img className={carouselStyle.playIcon} src={playIcon} alt="" />
          </button>
        </div>
      </div>
      <div className={carouselStyle.imageContainer}>
        <img className={carouselStyle.podCover} src={show.image} alt="" />
      </div>
      { startAnimation && <SpringIn>
        <Player/>
        </SpringIn>
         }
    </div>
  )
}

export default Carousel