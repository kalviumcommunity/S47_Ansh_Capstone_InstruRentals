import './App.css'
import LandingPage from './components/LandingPage'
import NavigationBar from './components/NavigationBar';
import Shop from './components/rentals/Shop';
import Profile from './components/auth/Profile'
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin'
import PrivateRoute from './components/auth/PrivateRoute';
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';

function App() {

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>

        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
      </Suspense>
    
    </>
  )
}

export default App
