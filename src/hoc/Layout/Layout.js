import React from 'react'

import Aux from '../Aux'
import classes from './Layout.module.css'

class Layout extends React.Component {
  state = {
    showSideDrawer: false,
  }
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }
  toggleSideDrawer = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer }
    })
  }

  render() {
    return (
      <Aux>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    )
  }
}

export default Layout
