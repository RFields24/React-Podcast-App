import React from 'react'
import podcastCover from '../img/pcard2.jpg'
import exploreStyle from './explore.module.css'
import {Link} from 'react-router-dom'

const {Client} = require('podcast-api')

const client = Client({
  apiKey: process.env.d833c3f184974abea2b3f129dcabd7a7 || null,
});

client.fetchBestPodcasts({page: 2, region: 'us' }).then((response) => {
  console.log(response.data);
}).catch((error) => {
  console.log(error);
});

function FullCard() {
  return (
    <Link to = "/podcasthome" className={exploreStyle.link}>
      <div className={exploreStyle.card}>
        <div className={exploreStyle.imageContainer}>
          <img className={exploreStyle.img} src={podcastCover} alt="" />
        </div>
        <div className={exploreStyle.info}>
          <h2 className={exploreStyle.h2}>Best Of (NBA Draft preview: Could Paolo Banchero be the No. 1 pick?)</h2>
          <p className={exploreStyle.p}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatem reprehenderit deleniti a doloremque.</p>
        </div>
      </div>
     </Link> 
  )
}

export default FullCard