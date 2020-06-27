import React, { Component } from 'react'
import classes from './Navbar.module.css'

import Logo from '../LogoDir'
import links from '../../constants/links'
import {Link} from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className={classes.gridUpperContainer}>
          <div className={`${classes.gridUpperToggle} ${classes.gridItem}` }>MENU</div>
          <div className={classes.gridUpperLogo}><Logo/></div>
        </div>
        <ul className={classes.gridLowerContainer}>
          {
            links.map((item, index) => {
              return(

                <li className={classes.gridItem} key={index}>
                  <Link to={item.path}>
                  {item.text}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    )
  }
}

export default Navbar
