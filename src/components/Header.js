import { useState } from "react"
import { Link } from "react-router-dom"

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
            
        <img src="https://static.vecteezy.com/system/resources/previews/005/085/502/non_2x/burger-logo-free-vector.jpg" alt="logo gose here" className='logo'  />
        </a>
        
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
                  <Link  to="/"><li >Home</li></Link>  
                  <Link to="/about">  <li>About</li></Link>
                   <Link to="/contact"><li>Contact</li></Link> 
                   <Link to="/instamart"><li>InstaMart</li></Link>
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
