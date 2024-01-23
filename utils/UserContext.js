import { createContext } from "react";

const UserContext=createContext({user:{
    name:"ajmal",  
    email:"ajmal@gmail.com"
}}) 

export default UserContext;