import {useParams} from 'react-router-dom'
import useRestaurent from '../../utils/useRestuarent'
const RestaurentMenu=()=>{
    const params=useParams()
    console.log(params)
    //this is the way use custome hook to get the data formt the api for 
    //                 -  the custome rendering
    let data=useRestaurent(params)
    return (
        <div>
            <h1>Resturent id:{params.id}</h1>
            <h2>Jumana</h2>

        </div>
    )
}
export default RestaurentMenu