import React from 'react'
import ReactDom from 'react-dom'
const heading = React.createElement(
    "h1", {
    id: "title"
},
    "hello suhail how are your"

)
const Title = () => {
    return (
        // <small>FOOD VILLA</small>
        <img src="https://static.vecteezy.com/system/resources/previews/005/085/502/non_2x/burger-logo-free-vector.jpg" alt="logo gose here" className='logo' srcset="" />
    )
}
const colorAA={
    backgroundColor:"grey",
    border:"3.001px solid black"
}
const HeaderComponent = () => {
    return (
        <div style={colorAA} className='header'>
            <Title ></Title  >
            <div className='nav-items'>
                <ul >
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    )
}
const data={
    image:"https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg",
    name:"Burger king",
    cusines:["Burger","Americans"],
    rating:"4.3"
}
const RestrauntCard=()=>{
    return(
        <div className='card'>
            <img  src={data.image} alt="" />
            <h2 style={{fontFamily:""}}>{data.name}</h2>
            <small>{data.cusines}</small>
            <h5>{data.rating}</h5>
        </div>
    )
}
const Body = () => {
    return (
        <div>
            <RestrauntCard/>
        </div>
    )
}
const Footer=()=>{
    return (
        <h6>footer</h6>
    )
}

const Applayout = () => {
    return (
        <>
        <HeaderComponent />
        <Body/>
        <Footer/> 
        </>

    )
}

const root = ReactDom.createRoot(document.getElementById('root'))
 
root.render(<Applayout />)