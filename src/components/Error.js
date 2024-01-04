import { useRouteError } from "react-router-dom";
const Error=()=>{
    let err=useRouteError()
    console.log(err)
    return (
        <div>
            <h1 style={{display:"flex", justifyContent:"center",fontFamily:"monospace",fontWeight:"bolder",color:"red"}}>Opps</h1>
            <h5 style={{display:"flex", justifyContent:"center"}}>Page not found......</h5>
            <small style={{display:"flex", justifyContent:"center"}}>somthing went wrong....404 Erro!!</small>
            
        </div>
    )
}
export default Error;