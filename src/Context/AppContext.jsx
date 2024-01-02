import { useReducer, useState, useEffect } from "react";
import { createContext } from "react";
import {Reducer,initial} from './Reducer'

export const AppContext=createContext();

export default function AppContextProvider({children})
{
    // reducer calling
    const [product,dispatch]=useReducer(Reducer,initial);
    // login key
    const [isLoggedIn,setLoggedIn]=useState(false);
    //  to show loading
    const [loading,setLoading]=useState(false);
    // API Calling
    const API_URL = "https://dummyjson.com/products";
    const [posts,setPosts]=useState([]);
 
    // creating api
    async function fetchData()
    {
       try{
          setLoading(true);
          const res=await fetch(API_URL);
          const data=await res.json();
          setPosts(data.products);
       }
       catch(err)
       {
          console.log(err);
       }
       setLoading(false);
    }

     //  API CALL through useEffect hook
     useEffect(()=>{ fetchData();},[])

   const val={
      product, dispatch, fetchData, loading ,setLoading ,posts,setPosts,isLoggedIn,setLoggedIn,

   };

   // provition of context;
    return <AppContext.Provider value={val}>
        {children}
    </AppContext.Provider>
}