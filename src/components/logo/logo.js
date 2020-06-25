import React from 'react'
import classes from './logo.module.css'

const Logo = ({src, alt}) => {
  return(
    <div className={classes.Logo}>
      <a href="./"><img src={src} alt={alt}/></a>
    </div>
    
  )
}
export default Logo
