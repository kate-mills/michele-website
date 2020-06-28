import React, { Component } from 'react'
import classes from './Layout.module.css'

import Aux from '../Aux'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

class Layout extends Component {
  render() {
    return (
      <>
      <div className={classes.outerWrapper}>
        <span></span>
      <Aux>
        <div className={classes.innerWrapper}>
        <Navbar />
        <main className={classes.mainContent}>
          {this.props.children}
        </main>
        <Footer />
      </div>
      </Aux>
        </div>
      </>
    )
  }
}

export default Layout
