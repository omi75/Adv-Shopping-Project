import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartItem from '../components/CartItem'

function Cart() {
  const {cart}=useSelector((state)=>state)
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect(()=>{
    console.log(cart)
    setTotalAmount(cart.reduce((old,curr)=>old+curr.price,0));
  },[cart])
  return (
    <div className=''>
      {
        cart.length > 0 ? 
        
        (
        <div className='flex gap-16 max-w-6xl p-6 mx-auto flex-wrap lg:flex-nowrap'>
            <div className='lg:w-[70%]'>
              {
                cart.map((item,index)=>(
                  <CartItem key={item.id} item={item} itemIndex={index}/>
                ))
              }
            </div>
          
            <div className='md:w-[30%] w-full flex flex-col gap-7 justify-start'>
              <span className='text-xl text-[#166534] uppercase font-[600]'>YOUR CART</span>
              <h2 className='text-5xl font-[600] text-[#15803d] uppercase mb-3'>SUMMARY</h2>
              <span className='font-[600] text-xl text-slate-700'>Total Items: {cart.length}</span>
              <span className='text-slate-700 text-xl font-[600] mb-3'>Total Amount: $ {totalAmount}</span>
              <button className='text-lg w-full py-2.5 rounded-lg font-bold text-white bg-[#15803d]
          border-2 border-[#15803d] hover:bg-white hover:text-[#15803d] transition-all duration-300 ease-in'>Checkout Now</button>
            </div>
        </div>) 
        
        :(<div className='flex flex-col justify-center items-center gap-y-3 h-screen'>  
          <h2 className=' text-xl font-bold'>Your Cart is Empty !</h2>
          <NavLink to={'/'}>
            <button className='uppercase bg-green-600 px-5 py-3 font-bold text-white rounded-md'>shop now</button>
          </NavLink>
        </div>)

      }
    </div>
  )
}

export default Cart