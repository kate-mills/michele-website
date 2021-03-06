import React from 'react'
import classes from './Logo.module.css'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="./">
      <img
        className={classes.LogoImg}
        src="https://i.imgur.com/gLJ1OI4.png"
        alt="Michele Corley Clinical Skincare Logo"
        crossOrigin="anonymous"
      />
    </Link>
  )
}
export default Logo
