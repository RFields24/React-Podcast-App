import React from 'react'
import listStyle from './episode.module.css'
import ListItem from './ListItem.js'
function EpisodeList() {
  

  return (
    <div className={listStyle.container}>
      <h3>Episodes</h3>
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  )
}

export default EpisodeList