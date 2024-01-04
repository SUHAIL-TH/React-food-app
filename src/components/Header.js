import { useState } from "react"
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
        <img src="https://static.vecteezy.com/system/resources/previews/005/085/502/non_2x/burger-logo-free-vector.jpg" alt="logo gose here" className='logo'  />
    )
}
const colorAA = {
    backgroundColor: "grey",
    border: "3.001px solid black"
}
const HeaderComponent = () => {
    const[isLoggedIn,setIsLoggedIn]=useState(false )
    return (
        <div style={colorAA} className='header'>
            <Title ></Title  >
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>cart</li>
                </ul>
            </div>
            {isLoggedIn?   <button onClick={()=>setIsLoggedIn(false)}>LogOut</button>:  <button onClick={()=>setIsLoggedIn(true)}>LogIn</button>}
         
          
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
