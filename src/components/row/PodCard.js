import React from 'react'
import rowStyle from './row.module.css'
import podcastCover from '../img/pcard2.jpg'


function PodCard() {
  return (
    <div className={rowStyle.cardWrapper}>
      <img className={rowStyle.cardPic} src={podcastCover} alt="" />
      <h3>Channel Name</h3>
    </div>
    
  )
}

export default PodCard