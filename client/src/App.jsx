import { useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import NavigationBar from './components/NavigationBar';
import Shop from './components/rentals/Shop';
import Signup from './components/auth/Signup';

function App() {

  return (
    <>
      {/* <LandingPage></LandingPage> */}
      {/* <Login></Login> */}
      <Signup></Signup>
    </>
  )
}

export default App
