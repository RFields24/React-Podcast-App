import React from 'react'
import playerStyles from './player.module.css'
// import image from '../img/pcard2.jpg'
import back from '../img/back30.png'
import play from '../img/play2.png'
import forward from '../img/up30.png'
import que from '../img/que.png'
import Shows from './../explore/fullcard.json'


function Player() {

  const show = Shows[0].podcasts[14]
  // console.log(show)


  return (
    <div className={playerStyles.player}>
      <div className={playerStyles.hero}>
        <img className={playerStyles.image} src={show.image} alt="" />
        <h3 className={playerStyles.epTitle}>Skip and Shannon: Undisputed</h3>
        <p className={playerStyles.showName}>{show.title}</p>
      </div>
      <div className={playerStyles.action}>
        <img className={playerStyles.back} src={back} alt="" />
        <img className={playerStyles.play} src={play} alt="" />
        <img className={playerStyles.forward} src={forward} alt="" />
        
      </div>
      <div className={playerStyles.info}>
        <div className={playerStyles.bar}>
          <div className={playerStyles.progress}></div>
        </div>
        <div className={playerStyles.time}>
          <p>0:00</p>
          <p>45:00</p>
        </div>
        <div className={playerStyles.footer}>
          <p>Playing Next</p>
          <img className={playerStyles.que} src={que} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Player