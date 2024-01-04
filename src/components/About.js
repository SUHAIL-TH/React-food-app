import HeaderComponent from "./Header"
import { Outlet } from "react-router-dom"
const About =()=>{
    return (
        <div>
            {/* <HeaderComponent></HeaderComponent> */}
            <h1 style={{margin:"10px"}}>About us PAGE</h1>
            <p style={{margin:"10px"}}>This  is the food card displaying app contain all about the food</p>
            <Outlet></Outlet>
        </div>
    )
}

export default About