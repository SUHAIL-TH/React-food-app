import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import UserContext from "../../utils/UserContext"

//import image from a folder
// import Logo from '../assets/img/'

const loggedInUser=()=>{
    //api call to check for authtentication
    //if there is authentication returen true other wise return false
    return false
}

const Title = () => {
    return (
        // <small>FOOD VILLA</small>
        
        <a href="/">
            
        <img src="https://static.vecteezy.com/system/resources/previews/005/085/502/non_2x/burger-logo-free-vector.jpg" alt="logo gose here" className='h-20'  />
        </a>
        
    )
}
const colorAA = {
    backgroundColor: "grey",
    border: "3.001px solid black"
}
const HeaderComponent = () => {
    const[isLoggedIn,setIsLoggedIn]=useState(false )
    const {user}=useContext(UserContext)
    console.log(user)
    return (
        <div  className='flex  justify-between  bg-black shadow-lg m-2'>
            <Title ></Title  >
            <div className='nav-items'>
                <ul className="flex py-10 ">
                  <Link  to="/"><li className="px-2 text-white font-bold ">Home</li></Link>  
                  <Link to="/about">  <li className="px-2 text-white font-bold">About</li></Link>
                   <Link to="/contact"><li className="px-2 text-white font-bold">Contact</li></Link> 
                   <Link to="/instamart"><li className="px-2 text-white font-bold">InstaMart</li></Link>
                    <li className="px-2 text-white-900 font-bold">cart</li>
                </ul>
            </div>
             <h2 className="text-white ">{user.name}</h2>
            {isLoggedIn?   <button  onClick={()=>setIsLoggedIn(false)}>LogOut</button>:  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>setIsLoggedIn(true)}>LogIn</button>}
         
          
        </div>
    )
}

export default HeaderComponent;

// import React from 'react'

// export default function Title() {
//   return (
//     <div>
      
//     </div>
//   )
// }
