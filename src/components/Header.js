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

export default HeaderComponent;

// import React from 'react'

// export default function Title() {
//   return (
//     <div>
      
//     </div>
//   )
// }
