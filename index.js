import React from 'react'
import ReactDom from 'react-dom/client'
const heading = React.createElement(
    "h1", {
    id: "title"
},
    "hello suhail how are your"

)
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
const config = [
    {
        type: "carousel",
        cards: [
            {
                offerName: "50% off"
            },
            {
                offerName: "No delivery charge"
            },

        ],
        
    },
    {
        type: "resuraurants",
        cards: [
            {
                image: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg",
                name: "Burger king",
                cusines: ["Burger", "Americans"],
                rating: "4.3"
            },
            {
                image: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg",
                name: "KFC",
                cusines: ["Burger", "Americans"],
                rating: "4.3"
            }
           

        ],
        
    },
    

]
const restrautlist = [{
    image: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg",
    name: "Burger king",
    cusines: ["Burger", "Americans"],
    rating: "4.3",
    id:1
},
{
    image: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg",
    name: "KFC",
    cusines: ["kfc", "Americans"],
    rating: "4.3",
    id:2
},
{
    image: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg",
    name: "Nahdi mandi",
    cusines: ["mandi", "bangalore","kannur"],
    rating: "4.3",
    id:3
}]
const RestrauntCard = (props) => {
    console.log(props);
    const {image,name,cusines,rating}=props.datalist
    console.log(cusines)
    console.log(name);
    return (
        <div className='card'>
            <img src={image} alt="" />
            <h2 style={{ fontFamily: "" }}>{name}</h2>
            <small>{cusines?.join(',')}</small>
            <h5>{rating}</h5>
        </div>
    )
}
const Body = () => {
    return (
        <div className='cardbody'>
            {restrautlist.map((data)=>{

           return <RestrauntCard key={data.id}  datalist={data} hello="card data has passed here"/>
            })}

        

        </div>
    )
}
const Footer = () => {
    return (
        <h6>footer</h6>
    )
}

const Applayout = () => {
    return (
        <>
            <HeaderComponent />
            <Body />
            <Footer />
        </>

    )
}

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<Applayout />)