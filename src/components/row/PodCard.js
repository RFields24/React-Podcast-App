import React from 'react'
import rowStyle from './row.module.css'
import podcastCover from '../img/pcard2.jpg'
import {Link} from 'react-router-dom'
import Shows from '../explore/fullcard.json'

const shows = Shows[0].podcast

function PodCard() {
  return (
    <Link to = "/podcasthome" className={rowStyle.link}>

      {/* {
        shows.map((show, index) => {
          return(
            <div key={index} className={rowStyle.cardWrapper}>
              <img className={rowStyle.cardPic} src={show.image} alt="Show"/>
              <h3 className={rowStyle.h3}>{show.title}</h3>
            </div>
          )
        })
      } */}
      <div className={rowStyle.cardWrapper}>
        <img className={rowStyle.cardPic} src={podcastCover} alt="" />
        <h3 className={rowStyle.h3}>Skip and Shannon: Undisputed</h3>
      </div>
    </Link>
    
  )
}

export default PodCard