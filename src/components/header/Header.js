import React from 'react'
import logo from '../img/plogo.png'
import search from '../img/search.png'
import headerStyle from './header.module.css'
import {Link} from 'react-router-dom'


function Header() {
  return (
    <div className={headerStyle.header}>
      <Link to = "/">
      <img className={headerStyle.logo} src={logo} alt="" />
      </Link>
      <img className={headerStyle.search}src={search} alt="" />
    </div>
  )
}

export default Header