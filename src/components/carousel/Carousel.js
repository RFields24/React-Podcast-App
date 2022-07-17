import {React, useState} from 'react'
import carouselStyle from './carousel.module.css'
import arrowLeft from '../img/arrowl.png'
import arrowRight from '../img/arrowr.png'
import podcastCover from '../img/podcastcover.jpg'
import playIcon from '../img/play.png'
import Player from '../player/Player.js'
import SpringIn from '../player/SpringIn.js'
import Shows from '../explore/fullcard.json'


function Carousel() {

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
          <h3 className={carouselStyle.h3}>Skip and Shannon: Undisputed</h3>
          <h1 className={carouselStyle.h2}>Best Of (NBA Draft preview: Could Paolo Banchero be the No. 1 pick?)</h1>
          <p>
          The Skip and Shannon: Undisputed Podcast. Skip Bayless, Shannon Sharpe, and Jenny Taft discuss the biggest stories in the world of sports. It's unscripted and unfiltered. Don't miss the television show Monday-Friday at 9:30am ET on FS1.
          </p>
          <span>45 mins</span>
          <button onClick={ function moveContent() {
            
            setStartAnimation(!startAnimation)}} 
            className={carouselStyle.play}>Play
          
          <img className={carouselStyle.playIcon} src={playIcon} alt="" />
          </button>
        </div>
      </div>
      <div className={carouselStyle.imageContainer}>
        <img className={carouselStyle.podCover} src={podcastCover} alt="" />
      </div>
      { startAnimation && <SpringIn>
        <Player/>
        </SpringIn>
         }
    </div>
  )
}

export default Carousel