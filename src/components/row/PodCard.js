import React from 'react'
import rowStyle from './row.module.css'
// import podcastCover from '../img/pcard2.jpg'  !!Original image!!
import {Link} from 'react-router-dom'
import Shows from '../explore/fullcard.json'

const shows = Shows[0].podcasts
function PodCard() {
  return (
      <div className={rowStyle.div}>
      {
        shows.map((show, index) => {
          return(
            <Link to = "/podcasthome" className={rowStyle.link}>
              <div key={index} className={rowStyle.cardWrapper}>
                <img className={rowStyle.cardPic} src={show.image} alt="Show"/>
                <h3 className={rowStyle.h3}>{show.title}</h3>
              </div>
            </Link>
          )
        })
      }
      </div>
      //  {/* <div className={rowStyle.cardWrapper}>
      //    <img className={rowStyle.cardPic} src={podcastCover} alt="" />
      //   <h3 className={rowStyle.h3}>Skip and Shannon: Undisputed</h3>
      //  </div>  */}
     
    
  )
}

export default PodCard