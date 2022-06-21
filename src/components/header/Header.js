import React from 'react'
import logo from '../img/plogo.png'
import search from '../img/search.png'
import headerStyle from './header.module.css'


function Header() {
  return (
    <div className={headerStyle.header}>
      <img className={headerStyle.logo} src={logo} alt="" />
      <img className={headerStyle.search}src={search} alt="" />
    </div>
  )
}

export default Header