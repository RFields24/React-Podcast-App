import React from 'react'
import PodHome from './podcasthome.module.css'
import Header from '../../header/Header.js';
import PodHero from './PodHero.js'
import EpisodeList from './EpisodeList.js'

function podcasthome() {

  // const show = Shows[0].podcast[0]
  // console.log('show', show)

  return (
    <div className={PodHome.container}>
      <Header />
      <PodHero />
      <EpisodeList />
    </div>
  )
}

export default podcasthome