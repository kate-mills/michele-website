import React from 'react'

import Logo from './components/logo/logo'

import HomePage from './pages/homepage'
import Products from './pages/products'
import Product from './pages/products/product'
import Error from './pages/error'

import './App.css'

function App() {
  return (
    <>
      <Logo
        src="https://i.imgur.com/CGKmDui.png"
        alt="Michele Corley Clinical Skincare Logo"
      />
      <HomePage />
      <Products/>
      <Product/>
      <Error/>
    </>
  )
}

export default App
