import React from 'react'
import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { remove } from '../redux/Slices/CartSlice';

function CartItem({item}) {

    const dispatch=useDispatch();

    function removeItem()
    {
      dispatch(remove(item.id));
      toast.error("Item removed from cart")
    }
  return (
    <div className='p-4 border-b-2 last:border-none border-slate-700'>
       <div className="flex justify-between py-3.5 px-2.5 gap-14 flex-col md:flex-row">
          <section className='md:w-[40%] w-full flex justify-center items-center'>
              <img src={item.thumbnail} className="w-[40%] md:w-[50%] lg:w-full" alt="item" loading='lazy'/>
          </section>

          <section className='md:w-[70%] w-full flex flex-col gap-5'>
              <h2 className=' text-xl font-[600] text-slate-700'>{item.title}</h2>
              <p className='text-md text-gray-700'>{item.description.substr(0,150)}...</p>

              <section className='flex w-full justify-between'>
                  <span className=' text-green-600 font-bold text-lg'>$ {item.price}</span>
                  <div className='bg-red-300 w-10 h-10 rounded-full flex justify-center items-center text-2xl'>
                    <MdDeleteSweep className=' text-red-800 cursor-pointer' onClick={removeItem}/>
                  </div>
              </section>
          </section>

          
      </div>
        
    </div>
  )
}

export default CartItem