import React, { lazy, Suspense, useState,useContext } from 'react'
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
// import Instamart from './components/Instamart'
import UserContext from '../utils/UserContext'
import { Provider } from 'react-redux'
import store from '../utils/store'

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


//this is for lazyload this module this will be imported when  ever we call the path other wise it will not load
//here this will suspend the code for the first time so we want to handle it
const Instamart = lazy(() => import("./components/Instamart"))

const Applayout = () => {
    let [userData,setUserData]=useState({
        name:"ar",
        email:"ajmal@gmail.com"
    })
    
    return (
        //this provider help to provide store to the all componet in our react application
        <Provider store={store}>
        <UserContext.Provider value={{user:userData}}>

            <HeaderComponent />
            {/* <Body /> */}
            <Outlet></Outlet>
            <Footer />
        </UserContext.Provider>
        </Provider>

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
                element: <Body  user={{
                    name:"ajmal",
                    email:"ajmal@gmail.com"
                }}/>
            },
            {
                path: "/about",
                element: <AboutClass />,
                children: [{
                    path: "profile",
                    element: <Profile />
                }]
            },
            {
                path: "/contact",
                element: <Contact />
            }, {
                //this is dynamic rourting because the is changing dynamically
                path: "/restuarent/:id",
                element: <RestaurentMenu></RestaurentMenu>

            },
            {
                //this is is a lazy loaded module
                path: "/instamart",
                element: <Suspense 
                // fallback={
                //     //this will help to show somthing that until the lazy loadaed module avalilable
                // }
                ><Instamart /></Suspense>


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