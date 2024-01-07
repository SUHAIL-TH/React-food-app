import { useEffect, useState } from 'react'
import { restrautlist } from '../constant'
import RestrauntCard from './Restruantcard'
import { filterlist } from '../../utils/helper'
//filtering function for the list

import useOnline from '../../utils/useOnline'


const Body = () => {
    const serchTxt = "kfc"
    const [searchText, setSearchtext] = useState("")
    const [allrestuarent, allsetRestuarant] = useState(restrautlist)
    const [fileterRestuarent,setFilterrestuarent]=useState(restrautlist)

    //this hook is used to perfrom side effet 
    //this hook will called  when the component it renderes
    //this take two propreties one is the call back fucntion other is the dependecies array 
    //dependencies array help understand in which the useeffect should be depend on


    useEffect(()=>{
        console.log("jooo")
        // geRestuareants()
    },[])//if give we somthing inside the depedency array this use Effect will render when ever a change in this dependecny array has occured

    /////this is used to make the api call in side the useEffect
    // async function geRestuareants(){

    //     console.log("hii suhail")
    //     const data=await fetch("https://www.swiggy.com/dapi/restaurants/List/v5?lat=12.9351929&lng=77.62448069999999&page_typr=DESKTOP_WEB_LISTING")
    //     const json=await data.json()
    //     console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    //     setRestuarant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
    // }
    const offline=useOnline();
    console.log(offline)
    let da=true
    //this help to check for wheter we are online or ofline
    if(!da){
       return <h3 style={{color:"red"}}>🛑🛑🛑🛑🛑🛑🛑please check your internet  connection🛑🛑🛑🛑🛑🛑🛑🛑</h3>
    }
    return (
        <>
            <div className='search-container'>
                <input type="text" onChange={(e) => {
                    setSearchtext(e.target.value)
                }} className='search' placeholder='Search' value={searchText} />
                <button className='search-button' onClick={() => {
                    //update the restuarent data
                    const data = filterlist(searchText, allrestuarent)
                    setFilterrestuarent(data)
                }}>search</button>
            </div>
            <div className='cardbody'>
                {fileterRestuarent.map((data) => {
                    return <RestrauntCard key={data.id} datalist={data} hello="card data has passed here" />
                })}
            </div>
        </>
    )
}

export default Body