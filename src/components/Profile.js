import { useEffect, useState } from "react";

//useState hook is used to create a state in function componet
const Profile=(props)=>{
    const [count,setCount]=useState(0);
    useEffect(()=>{
      //USE effect is used to make api call
      //this is called after the render function has worked then useeffect is worked


    })
   
    return (
        <>
        <h1>profile component</h1>
        <small>{props.name}</small>
        <h4>Count:{count}</h4>
     
      <button onClick={()=>setCount(count+1)}>click</button>
        </>
    )
}

export default Profile;