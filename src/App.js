import React from 'react'
import ReactDom from 'react-dom/client'
import HeaderComponent from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
const heading = React.createElement(
    "h1", {
    id: "title"
},
    "hello suhail how are your"

)



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