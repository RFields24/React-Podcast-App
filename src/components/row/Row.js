import React from 'react'
import rowStyle from './row.module.css'
import PodCard from './PodCard'
function Row() {
  return (
    <div className={rowStyle.container}>
      <h2 className={rowStyle.h2}>Section Title</h2>
      <div className={rowStyle.row}>
      
      <PodCard />
        
        
      </div>
    </div>
  )
}

export default Row