import React from 'react'

import Logo from './components/logo/logo'
import HomePage from './pages/homepage'

import './App.css'

function App() {
  return (
    <>
      <Logo
        src="https://i.imgur.com/CGKmDui.png"
        alt="Michele Corley Clinical Skincare Logo"
      />
      <HomePage />
    </>
  )
}

export default App
