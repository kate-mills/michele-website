import React from 'react'
import './App.css'

import Logo from './components/logo/logo'

import HomePage from './pages/homepage'
import Products from './pages/products'
import Product from './pages/products/product'
import Error from './pages/error'

import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Logo
        src="https://i.imgur.com/CGKmDui.png"
        alt="Michele Corley Clinical Skincare Logo"
      />
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
