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
import Products from './components/rentals/Products';
import Cart from './components/rentals/Cart'
import PaymentSuccess from './components/payments/PaymentSuccess';
import Orders from './components/rentals/Orders';
import AiForm from './components/ai/AI';

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
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path='/orders' element={<Orders/>}></Route>
          <Route path='/ai' element={<AiForm/>}></Route> 
{/*   added the path of the ai model    */}
        </Routes>
      </Suspense> 
    </>
  )
}

export default App
