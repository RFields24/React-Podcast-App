import React from 'react'
import PodHeroStyle from'./podhero.module.css'
// import podPic from '../../img/pcard2.jpg'
import Shows from '../../explore/fullcard.json'

function PodHero() {
  // PULLING A SINGLE PODCAST MANUALLY

  const show = Shows[0].podcasts[14]
  console.log(show)
  
  return (
    <div className={PodHeroStyle.container}>
      <img className={PodHeroStyle.img} src={show.image} alt="" />
      <h2>{show.title}</h2>
      <button className={PodHeroStyle.button}>Follow</button>
      <p className={PodHeroStyle.p}>{show.description}</p>
    </div>
  )
}

export default PodHero