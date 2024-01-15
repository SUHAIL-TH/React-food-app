import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

//this function is used to create a store this is came form raeact toolkit
//this is the thing we want to subscribe
const store=configureStore({
    reducer:{
        cart:cartSlice
    }
})
export default store;