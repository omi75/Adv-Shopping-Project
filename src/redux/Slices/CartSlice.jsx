import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add:(state,actions)=>{
            state.push(actions.payload)
        },
        remove:(state,actions)=>{
            return state.filter((item)=>item.id!==actions.payload)
        },
        
    }
});

export const {add,remove}=CartSlice.actions;    // destructuring the functions
export default CartSlice.reducer;