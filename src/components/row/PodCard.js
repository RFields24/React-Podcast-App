import React from 'react'
import rowStyle from './row.module.css'
import podcastCover from '../img/pcard2.jpg'
import {Link} from 'react-router-dom'


function PodCard() {
  return (
    <Link to = "/podcasthome" className={rowStyle.link}>
      <div className={rowStyle.cardWrapper}>
        <img className={rowStyle.cardPic} src={podcastCover} alt="" />
        <h3 className={rowStyle.h3}>Skip and Shannon: Undisputed</h3>
      </div>
    </Link>
    
  )
}

export default PodCard