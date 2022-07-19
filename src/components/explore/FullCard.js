// import React, { useState, useEffect } from 'react'
import React, { useState } from 'react'
// import podcastCover from '../img/pcard2.jpg'
import exploreStyle from './explore.module.css'
import {Link} from 'react-router-dom'
import Shows from './fullcard.json'
import axios from 'axios'

// const epDescription = 'Not yet Fetched'
const shows = Shows[0].podcasts
console.log(shows)
// const id = Shows[0].podcast[0].id
// console.log(id)
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

  // TEMPORARY START FOR SEE MORE FUNCTIONALITY

  const [isSeeMoreShown, setSeeMoreShown] = useState(false)

  const toggle = () => {
      setSeeMoreShown(prevState => !prevState)
  }
  return (
    <Link to = "/podcasthome"className={exploreStyle.link}>
      { 

        // MAPPING PODCASTS TO EXPLORE SECTION

        shows.map((show, index) =>{
          // const id = show.podcast.id
          // console.log(id)
            // PULL ID TO PROVIDE DETAILS PAGE INFO
          const  getPodcast =() => {
            const id = show.id
            console.log(id)

            const options = {
              method: 'GET',
              headers: {
                'X-ListenAPI-Key': 'd833c3f184974abea2b3f129dcabd7a7'
              }
            };
            
            // fetch(`https://listen-api-test.listennotes.com/api/v2/podcasts/${id}`, options)
            // .then(res => res.json())
            // .then(data => console.log(data))
            
            const getDetails = async () => {
                const response = await axios.get(`https://listen-api-test.listennotes.com/api/v2/podcasts/${id}`, options)
                // console.log(response)
                const podcast = await response.data.podcasts
                console.log(podcast)
            
          }
          getDetails()
        }

         
          return(
            <div onClick={getPodcast} className={exploreStyle.card}>

              
                <div className={exploreStyle.imageContainer}>
                  <img className={exploreStyle.img} src={show.image} alt="" />
                </div>
                <div className={exploreStyle.info}>
                  <h2 className={exploreStyle.h2}>{show.title}</h2>
                  <p className={exploreStyle.p}>{show.description.substr(0,200)+ '...'}</p>
                  <button className={exploreStyle.seeMore} onClick={toggle}>{isSeeMoreShown ? 'See Less' : 'See More'}</button>
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