import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

//this function is used to create a store this is came form raeact toolkit
const store=configureStore({
    reducer:{
        cart:cartSlice
    }
})
export default store;