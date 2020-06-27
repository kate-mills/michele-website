import React, { Component } from 'react'
import classes from './Layout.module.css'

import Aux from '../Aux'
import Header from '../../components/Header'

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <main className={classes.mainContent}>{this.props.children}</main>
      </Aux>
    )
  }
}

export default Layout
