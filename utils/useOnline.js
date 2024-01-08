import { useEffect, useState } from "react"

const useOnline=()=>{
    
    const [isOnline,setIsOnline]=useState(true)
    useEffect(()=>{
        const handleOnline =()=>{
            //if i go online then setthe stataus as true
            setIsOnline(true)
        }
        const handleOfline=()=>{
            setIsOnline(false)
        }
        //this code will run onces when we load the 

        //this is a browser event that check for whether it is online or ofline
        window.addEventListener('online',handleOnline)

        window.addEventListener('offline',handleOfline)
        return ()=>{
            //this will remove the event listener form the browser when we change the componet this is unmound methode ,it help to increase the performances      
            window.removeEventListener("online",handleOnline)
            window.removeEventListener('offline',handleOfline)
        }
    },[])
    return isOnline //return the status whether it is online or ofline

}

export default useOnline