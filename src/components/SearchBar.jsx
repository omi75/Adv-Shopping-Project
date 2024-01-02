 import React, {useContext } from 'react'
import { RxCross2 } from "react-icons/rx";
import { AppContext } from '../Context/AppContext';

function SearchBar() {

  const {product:{searchKey},dispatch}=useContext(AppContext);
  function erase()
  {
    dispatch({
      type:"Search-Filter",
      payload:'',
    })
  }
  console.log(searchKey);
  return (
    <div>
        <section className=' hidden sm:flex items-center w-[70%] lg:w-[100%] mx-auto '>
            <input type="text" value={searchKey} className='w-[7rem] md:w-[18rem] lg:w-[24rem] p-4 text-black h-10 rounded-[20px]'
            placeholder='Search Item' onChange={(e)=>{
                dispatch({
                  type:"Search-Filter",
                  payload:e.target.value,
                })
            }}/>
            <RxCross2 className='z-[2] w-6 h-6 relative right-8 lg:right-8 text-black cursor-pointer' onClick={erase}/>
        </section>
    </div>
  )
}

export default SearchBar