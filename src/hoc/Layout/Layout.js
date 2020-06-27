import React, { Component } from 'react'

import Aux from '../Aux'
import Navbar from '../../components/Navbar'

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Navbar />
        <main>{this.props.children}</main>
      </Aux>
    )
  }
}

export default Layout
