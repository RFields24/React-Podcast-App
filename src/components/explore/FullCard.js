import React from 'react'
import podcastCover from '../img/pcard2.jpg'
import exploreStyle from './explore.module.css'


function FullCard() {
  return (
    <div className={exploreStyle.card}>
      <div className={exploreStyle.imageContainer}>
        <img className={exploreStyle.img} src={podcastCover} alt="" />
      </div>
      <div className={exploreStyle.info}>
        <h2 className={exploreStyle.h2}>Episode Title</h2>
        <p className={exploreStyle.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatem reprehenderit deleniti a doloremque.</p>
      </div>
    </div>
  )
}

export default FullCard