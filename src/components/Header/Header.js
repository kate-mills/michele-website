import React from 'react'
import classes from './Header.module.css'

import Navbar from './Navbar'

const Header = props => {
  return (
    <header>
      <Navbar />
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>{props.title}</h1>
      </div>
    </header>
  )
}
Header.defaultProps = {
  title: 'Beautifully Healty Skin Starts Here',
}

export default Header
