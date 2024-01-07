import React from 'react'
import ReactDom from 'react-dom/client'
import HeaderComponent from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import About from './components/About'
import AboutClass from './components/About'
import Error from './components/Error'
import Contact from './components/Contact'
import RestaurentMenu from './components/RestuarentMenu'
import Profile from './components/Profile'
//import createbrowser router from react router dom for routing
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
//basic way to create a react element
//outlet===the childern will go to the outlet according to  the route 
const heading = React.createElement(
    "h1", {
    id: "title"
},
    "hello suhail how are your"

)
//there are two type of routing
//'1 client side routinh
//2 server side routing 
//react and angular is client side routing in server side rotuing each time it will render a new html page


const Applayout = () => {
    return (
        <>
            <HeaderComponent />
            {/* <Body /> */}
            <Outlet></Outlet>
            <Footer />
        </>

    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        //this will load the error page when the route we provided is invalid  
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path:"/about",
                element:<AboutClass/>,
                children:[{
                    path:"profile",
                    element:<Profile/>
                }]
            },
            {
                path: "/contact",
                element: <Contact />
            },{
                //this is dynamic rourting because the is changing dynamically
                path:"/restuarent/:id",
                element:<RestaurentMenu></RestaurentMenu>

            }
        ]

    },


])

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)



// const config = [
//     {
//         type: "carousel",
//         cards: [
//             {
//                 offerName: "50% off"
//             },
//             {
//                 offerName: "No delivery charge"
//             },

//         ],

//     },
//     {
//         type: "resuraurants",
//         cards: [
//             {
//                 image: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg",
//                 name: "Burger king",
//                 cusines: ["Burger", "Americans"],
//                 rating: "4.3"
//             },
//             {
//                 image: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg",
//                 name: "KFC",
//                 cusines: ["Burger", "Americans"],
//                 rating: "4.3"
//             }


//         ],

//     },


// ]