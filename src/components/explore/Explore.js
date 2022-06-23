import React from 'react'
import exploreStyle from './explore.module.css'
import FullCard from './FullCard'
function Explore() {
  return (
    <div className={exploreStyle.container}>
      <h2 className={exploreStyle.sectionTitle}>Explore</h2>
      <div className={exploreStyle.cardContainer}>
        <div className={exploreStyle.left}>
          <FullCard />
          <FullCard />
          <FullCard />
          <FullCard />
          <FullCard />
          <FullCard />
          <FullCard />
          <FullCard />
          <FullCard />
          <FullCard />
          <FullCard />
          <FullCard />
        </div>
        <div className={exploreStyle.right}>
          <FullCard />
          <FullCard />
          <FullCard />
          <FullCard />
          <FullCard />
          <FullCard />
          <FullCard />
          <FullCard />
          <FullCard />
          <FullCard />
          <FullCard />
          <FullCard />
        </div>
      </div>
    </div>
  )
}

export default Explore