import React from 'react'
import classes from './Logo.module.css'

const Logo = ({ src, alt }) => {
  return (
    <div className={classes.Logo}>
      <a href="./">
        <img src={src} alt={alt} />
      </a>
    </div>
  )
}
export default Logo
