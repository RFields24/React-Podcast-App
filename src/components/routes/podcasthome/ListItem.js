import React from 'react'
import listStyle from './episode.module.css'
function ListItem() {
  return (
    <div className={listStyle.listItem}>
      <h3>Episode Name</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi tenetur optio rem cumque ad consectetur iusto non sequi, praesentium alias dolore voluptate! Quod, quos! Deserunt minima animi perspiciatis consequuntur.</p>
      <span>40 mins</span>
    </div>
  )
}

export default ListItem