import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart", //name of the slice
    //this is the inital state
    initialState:{
        items:["aa","bb"],
    }   ,
    //reducer is used to update the state
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            state.items=[]
        }
    }

})
//we also want to export the action
export const {addItem,removeItem,clearCart}=cartSlice.actions
//this is way we export reducer
export default cartSlice.reducer