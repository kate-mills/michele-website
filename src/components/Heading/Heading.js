import React from 'react'
import classes from './Heading.module.css'


const Header = props => {
  return (
    <div className={classes.titleContainer}>
      <h1 className={classes.title}>{props.title}</h1>
    </div>
  )
}
Header.defaultProps = {
  title: 'Beautifully Healty Skin Starts Here',
}

export default Header
