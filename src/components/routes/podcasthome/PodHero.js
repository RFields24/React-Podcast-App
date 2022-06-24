import React from 'react'
import PodHeroStyle from'./podhero.module.css'
import podPic from '../../img/pcard2.jpg'
function PodHero() {
  return (
    <div className={PodHeroStyle.container}>
      <img className={PodHeroStyle.img} src={podPic} alt="" />
      <h2>Skip and Shannon: Undisputed</h2>
      <button className={PodHeroStyle.button}>Follow</button>
      <p className={PodHeroStyle.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias tenetur optio facilis tempore, fugiat libero ad doloribus, voluptate error, natus commodi repellendus ab cumque quae. Praesentium iusto quibusdam dolore corrupti illo reprehenderit, placeat in mollitia suscipit doloribus nobis, inventore possimus consectetur ea assumenda. Eaque aspernatur provident tempore omnis molestias iusto!</p>
    </div>
  )
}

export default PodHero