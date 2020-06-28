import React, { Component } from 'react'
import classes from './Navbar.module.css'

import Logo from './Logo'
import links from '../../constants/links'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  state = {
    isOpen: false,
  }
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen }, () =>
      console.log(this.state.isOpen)
    )
  }
  closeMenu = () => {
    this.setState({isOpen: false})
  }
  render() {
    return (
      <header>
        <div className={classes.header}>
          <div className={classes.gridUpperContainer}>
            <div className={`${classes.gridUpperToggle} ${classes.gridItem}`}>
              <button
                type="button"
                className={classes.navBtn}
                onClick={this.handleToggle}>
                MENU
              </button>
            </div>
            <div className={classes.gridUpperLogo}>
              <Logo />
            </div>
          </div>
          <nav className={classes.navBar}>
            <ul
              className={
                this.state.isOpen
                  ? `${classes.gridLowerContainer} ${classes.showLower}`
                  : `${classes.gridLowerContainer} ${classes.hideLower}`
              }>
              {links.map((item, index) => {
                return (
                  <li className={classes.gridItem} key={index}>
                    <Link onClick={this.closeMenu}
                    to={item.path}>{item.text}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Navbar
