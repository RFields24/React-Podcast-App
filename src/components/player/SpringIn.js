import  { useState } from 'react'
import {useSpring, animated as a} from 'react-spring'
import playerStyles from './player.module.css'
import Player from './Player.js'

const SpringIn = ({children}) => {

  const animatedProps = useSpring({
    opacity: 1,
    marginRight: 0,
    from: {marginRight: -300, opacity: 0},
    config: {mass:1, tension:125,friction: 30},
  });
  return (
    <a.div className={playerStyles.container} style={{...animatedProps}}>
      {/* PLAYER */}
      {children}
    </a.div>
  )
}

export default SpringIn;