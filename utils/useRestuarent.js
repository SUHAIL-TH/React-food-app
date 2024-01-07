//this is way the create a cutsom hook we can resuse it

const useRestaurent=(resId)=>{
    //want to create a state to get the data
    const [resData,setResData]=useState()
    //GET DATA FROM API
    useEffect(()=>{
        getRestaruentData()
    },[]);
    async function  getRestaruentData(){
        let Data=await fetch("http")
        const jsData=await  Data.json()
        setResData(jsData)
        
    }

    
    //reurn restruarnt data
    return resData;
    //THIS is returning the state
};
export default useRestaurent;  