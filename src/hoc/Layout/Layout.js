import React, { Component } from 'react'
import classes from './Layout.module.css'

import Aux from '../Aux'
import Navbar from '../../components/Navbar'

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Navbar />
        <main className={classes.mainContent}>{this.props.children}</main>
      </Aux>
    )
  }
}

export default Layout
