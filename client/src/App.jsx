import { useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import NavigationBar from './components/NavigationBar';

function App() {

  return (
    <>
      <NavigationBar></NavigationBar>
      <LandingPage></LandingPage>
    </>
  )
}

export default App
