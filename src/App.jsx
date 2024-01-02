import React, { useContext } from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import LoginForm from './components/LoginForm'
import PrivateRoute from './pages/PrivateRoute'
import { AppContext } from './Context/AppContext'

function App() {

  const {isLoggedIn,setLoggedIn}=useContext(AppContext);
  return (
    <div>
        <NavBar/>
        <Routes>
           <Route path='/' element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
                <Home/>
            </PrivateRoute>  
           }/>
           <Route path='/cart' element={<Cart/>}/>
           <Route path='/login' element={<LoginForm setLoggedIn={setLoggedIn}/>}/>
        </Routes>
    </div>
  )
}

export default App