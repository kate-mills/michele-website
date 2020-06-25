import React from 'react'
import './App.css'

import Layout from './hoc/Layout'
import HomePage from './pages/HomePage'
import Products from './pages/Products'
import Product from './pages/Products/Product'
import Error from './pages/Error'

import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:slug" component={Product} />
        <Route component={Error} />
      </Switch>
    </Layout>
  )
}

export default App
