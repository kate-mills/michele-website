import React from 'react'
import './App.css'

import HomePage from './pages/HomePage'
import Products from './pages/Products'
import Product from './pages/Products/product'
import Error from './pages/Error'

import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/product/:slug" component={Product} />
        <Route component={Error} />
      </Switch>
    </>
  )
}

export default App
