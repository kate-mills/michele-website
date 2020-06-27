import React, { Component } from 'react'
import classes from './Layout.module.css'

import Navbar from '../../components/Navbar'

class Layout extends Component {
  render() {
    return (
      <>
        <main className={classes.mainContent}>
          <Navbar />
          <div className={classes.pageContent}>{this.props.children}</div>
        </main>
      </>
    )
  }
}

export default Layout
