import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast';
import { add,remove } from '../redux/Slices/CartSlice';

function Product({post}) {

  const cart = useSelector((state) => state.cart);
  const dispatch=useDispatch();

  function addToCart()
  {
     dispatch(add(post));
     toast.success("Item added to cart")
  }
  function removeItem()
  {
    dispatch(remove(post.id));
    toast.error("Item removed from cart")
  }

  
  return (
    <div className='flex flex-col justify-center items-center hover:scale-110 transition-all duration-300 ease-in shadow-xl gap-3 p-4 mt-10 ml-5 rounded-xl border'>
        <h2 className='text-green-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</h2>
        <span className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description}</span>
        <img src={post.images[0]} alt="cart data" className='h-[180px] rounded-md' loading='lazy'/>
        <section className='flex justify-between w-full items-center'>
            <span className='text-green-600 font-semibold'>$ {post.price}</span>
            { cart.some((p)=>p.id===post.id) 
            ? (<button onClick={removeItem} className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
              p-1 px-3 uppercase text-[12px] hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in'>Remove Item</button> )
            
            : (<button onClick={addToCart} className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
            p-1 px-3 uppercase text-[12px] hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in'>Add to Cart</button>)
            }
        </section>
    </div> 
  )
}

export default Product