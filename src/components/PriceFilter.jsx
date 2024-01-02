import React, { useContext, useState } from 'react'
import Slider from '@mui/material/Slider';
import { AppContext } from '../Context/AppContext';

function PriceFilter({posts,setPosts}) {

  const {product:{priceRange},dispatch}=useContext(AppContext);

  const setLowToHigh = () => {
    const sortedPosts = posts.sort((a, b) => a.price - b.price);
    setPosts([...sortedPosts]);
    };
    const setHighToLow = () => {
      const reversesortedPosts = posts.sort((a, b) => b.price - a.price);
      setPosts([...reversesortedPosts]);
    };
    const resetList = () => {
      const reversesortedPosts = posts.sort((a, b) => a.id - b.id);
      dispatch({type:"Range-Filter",payload:[10,2000]})
      setPosts([...reversesortedPosts]);
    };

    const handleChange = (ev, newVal) => {
      dispatch({
        type:"Range-Filter",
        payload:newVal,
      })
    };
  
  return (
        <div className='hidden lg:flex  lg:w-[200px] lg:h-[260px] flex-col gap-3 absolute top-16 left-2 border-2 py-2 px-5 rounded-[20px] shadow-md '>
            <h2 className=' text-center font-bold text-lg'>Filter</h2>
            <p className='hover:font-semibold text-sm cursor-pointer' onClick={()=>{setLowToHigh()}}> 
              <span>Sort Price</span> : Low - High
            </p>

            <p className='hover:font-semibold text-sm cursor-pointer' onClick={()=>{setHighToLow()}}>
              <span>Sort Price</span> : High - Low
            </p>

            <section className='mx-auto w-[130px]'>
                <Slider
                value={priceRange}
                onChange={handleChange}
                valueLabelDisplay="auto"
                min={10}
                max={2000}
                step={10}
                aria-labelledby='range-slider'
                />
              <div className='flex justify-between'>
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </section>
            
            <button className='w-[5rem] py-2 rounded-md text-white mx-auto font-semibold bg-blue-500 hover:bg-blue-700 
             transition-all duration-200  ease-linear cursor-pointer' onClick={()=>{resetList()}}>
              Reset
            </button>
        </div>
  )
}

export default PriceFilter