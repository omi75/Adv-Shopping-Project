import React, { useContext, useEffect, useState } from 'react'
import Spinner from '../components/Spinner.jsx';
import Product from '../components/Product';
import PriceFilter from '../components/PriceFilter.jsx';
import { AppContext } from '../Context/AppContext.jsx';

function Home() {
    const {product:{searchKey,priceRange},posts,setPosts,loading}=useContext(AppContext);

    // for price range
    function filterRange()
    {
      if(priceRange)
      {
          return posts.filter((pt)=>pt.price >= priceRange[0] && pt.price <= priceRange[1]);
      }
    }

  return (
    <div className='relative'>
     <PriceFilter posts={posts} setPosts={setPosts}/>
        
      {
        loading ? (<Spinner/>): posts.length > 0 ? 
        (<div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
        gap-y-8 max-w-6xl p-6 mx-auto my-7 max-h-[80vh]'>
            {filterRange().filter(p=>p.brand.toLowerCase().includes(searchKey.toLowerCase()) || p.title.toLowerCase().includes(searchKey.toLowerCase())
            || p.category.toLowerCase().includes(searchKey.toLowerCase()))
            .map((post)=>(<Product key={post.id} post={post}/>))}
        </div>)
        :
        (<div className='w-screen h-screen flex justify-center items-center'>
          <span className='font-bold'>No Data Found</span>
        </div>)
      }
    </div>
  )
}

export default Home