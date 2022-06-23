import React from 'react'
import listStyle from './episode.module.css'
import ListItem from './ListItem.js'
function EpisodeList() {
  return (
    <div className={listStyle.container}>Episodes
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  )
}

export default EpisodeList