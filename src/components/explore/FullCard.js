import React, { useState, useEffect } from 'react'
import podcastCover from '../img/pcard2.jpg'
import exploreStyle from './explore.module.css'
import {Link} from 'react-router-dom'
import Shows from './fullcard.json'

const epDescription = 'Not yet Fetched'
const shows = Shows[0].podcast
// class FullCard extends Component {



//   constructor(){
//     super();
//     this.state = {
//       shows: []
//     }
//   }

//   componentDidMount(){
//     fetch('/')
//     .then(res => res.json())
//     .then(podcast => this.setState({shows}, () => console.log('podcasts fetched..', podcast)))
//   }

//   render(){
//     return(
//       <Link key={podcast}to = "/podcasthome" className={exploreStyle.link}>
//         {
//           this.state.podcasts.map(podcast => {
//             <img src={podcast.image} alt=""></img>
//           })
//         }
//      </Link> 
//     )
//   }

// }



function FullCard() {

  return (
    <Link to = "/podcasthome" className={exploreStyle.link}>
      { 

        // MAPPING PODCASTS TO EXPLORE SECTION
        
        shows.map((show, index) =>{
          return(
            <div className={exploreStyle.card}>
              <div className={exploreStyle.imageContainer}>
                <img className={exploreStyle.img} src={show.image} alt="" />
              </div>
              <div className={exploreStyle.info}>
                <h2 className={exploreStyle.h2}>{show.title}</h2>
                <p className={exploreStyle.p}>{show.description}</p>
              </div>
            </div>
          )
        })
      }


      {/* <div className={exploreStyle.card}>
        <div className={exploreStyle.imageContainer}>
          <img className={exploreStyle.img} src={podcastCover} alt="" />
        </div>
        <div className={exploreStyle.info}>
          <h2 className={exploreStyle.h2}>Best Of (NBA Draft preview: Could Paolo Banchero be the No. 1 pick?)</h2>
          <p className={exploreStyle.p}>{epDescription}</p>
        </div>
      </div> */}
     </Link> 
  )
}

export default FullCard