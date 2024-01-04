import {useParams} from 'react-router-dom'
const RestaurentMenu=()=>{
    const params=useParams()
    console.log(params)
    return (
        <div>
            <h1>Resturent id:{params.id}</h1>
            <h2>Jumana</h2>

        </div>
    )
}
export default RestaurentMenu