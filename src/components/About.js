import HeaderComponent from "./Header"
import { Outlet } from "react-router-dom"
import ProfileFunction from './Profile'
import ProfileClass from './ProfileClass'   
import React from "react"
// const About =()=>{
//     return (
//         <div>
//             {/* <HeaderComponent></HeaderComponent> */}
//             <h1 style={{margin:"10px"}}>About us PAGE</h1>
//             <p style={{margin:"10px"}}>This  is the food card displaying app contain all about the food</p>
//             {/* <Outlet></Outlet> */}
//             <ProfileFunction name={"my name is ajmal"}></ProfileFunction>
//             <ProfileClass age={"my age is 28"}></ProfileClass>
//         </div>
//     )
// }
//this is the way to create class based about component
class AboutClass extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        //this is the best place to make an api call be this is called after render function
        console.log("compoent didMount")
    }
   
    render(){
        return(
            <div>
            {/* <HeaderComponent></HeaderComponent> */}
           
            <h1 style={{margin:"10px"}}>About us PAGE</h1>
            <p style={{margin:"10px"}}>This  is the food card displaying app contain all about the food</p>
            {/* <Outlet></Outlet> */}
            <ProfileFunction name={"my name is ajmal"}></ProfileFunction>
            <ProfileClass age={"my age is 28"}></ProfileClass>
        </div>
        )
    }
}
//hjasdjfkajsjdfdas
// export default About
export default AboutClass
