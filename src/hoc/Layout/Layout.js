import React, { Component } from 'react'
import classes from './Layout.module.css'

import Aux from '../Aux'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

class Layout extends Component {
  render() {
    return (
      <>
      <Aux>
        <Navbar />
          <main className={classes.mainContent}>{this.props.children}</main>
        <Footer />
      </Aux>
      </>
    )
  }
}

export default Layout
