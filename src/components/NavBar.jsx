import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom'
import toast from 'react-hot-toast';
import SearchBar from './SearchBar';
import { AppContext } from '../Context/AppContext';

function NavBar() {
  const {isLoggedIn,setLoggedIn,posts,setPosts}=useContext(AppContext);
  
  const {cart}=useSelector((state)=>state);
  return (
    <div className='bg-slate-900'>
      <nav className=' relative flex justify-between items-center max-w-6xl h-20 mx-auto'>
        <NavLink to={'/'}>
          {isLoggedIn &&
            <img className='ml-3 md:ml-5 h-8 md:h-12 lg:h-14' src="./logo.png" alt="logo" loading='lazy'/>
          }
        </NavLink>
        
         { isLoggedIn &&
            <SearchBar posts={posts} setPosts={setPosts}/> 
          }
        <section className='relative flex text-slate-100 items-center space-x-2 md:space-x-6 mr-3 md:mr-5'>
          
          { isLoggedIn &&
              <NavLink to={'/'}>
                <span className='text-lg md:text-xl'>Home</span>
              </NavLink>
          }

          {
            isLoggedIn &&
            <NavLink to={'/login'}>
              <button onClick={()=>{
                toast.success("Log Out Successfully!")
                setLoggedIn(false);
              }} 
              className='py-1 px-2 md:py-2 md:px-3 bg-indigo-900 rounded-md'>Log Out</button>
            </NavLink>
          }

          {
            isLoggedIn &&
            <NavLink to={'/cart'}>
            <div className='text-xl md:text-2xl relative'>
              <FaShoppingCart />
              
              { cart.length > 0 && 
                <span className='absolute -top-2 -right-2 bg-green-600 text-xs w-5 h-5  
                flex justify-center items-center rounded-full'>{cart.length}</span>     
              }
            </div>
          </NavLink>
          }
        </section>
      </nav>
    </div>
  )
}

export default NavBar