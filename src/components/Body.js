import { useState } from 'react'
import { restrautlist } from '../constant'
import RestrauntCard from './Restruantcard'

//filtering function for the list
function filterlist(searchtext, list) {
    if (searchtext === "") {
        return restrautlist
    }
    else {
        return list.filter((data) => data.name.includes(searchtext))
    }
}



const Body = () => {
    const serchTxt = "kfc"
    const [searchText, setSearchtext] = useState("")
    const [restuarent, setRestuarant] = useState(restrautlist)
    return (
        <>
            <div className='search-container'>
                <input type="text" onChange={(e) => {
                    setSearchtext(e.target.value)
                }} className='search' placeholder='Search' value={searchText} />
                <button className='search-button' onClick={() => {
                    //update the restuarent data
                    const data = filterlist(searchText, restuarent)
                    setRestuarant(data)
                }}>search</button>
            </div>
            <div className='cardbody'>
                {restuarent.map((data) => {
                    return <RestrauntCard key={data.id} datalist={data} hello="card data has passed here" />
                })}
            </div>
        </>
    )
}

export default Body