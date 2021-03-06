import React from 'react'
import './App.css'

import Nav from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Products from './pages/Products'
import Product from './pages/Products/Product'
import Error from './pages/Error'

import { Route, Switch } from 'react-router-dom'

function App() {
  return (

    <>
    <main>
      <Nav/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:slug" component={Product} />
          <Route component={Error} />
        </Switch>
        <Footer/>
      </main>
    </>
  )
}

export default App
