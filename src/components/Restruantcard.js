const RestrauntCard = (props) => {
    console.log(props);
    const {image,name,cusines,rating}=props.datalist
    
    
    return (
        <div className='w-56 p-2 m-2 bg-slate-200'>
            <img src={image} alt="" className="" />
            <h2 className="font-bold">{name}</h2>
            <small>{cusines?.join(',')}</small>
            <h5>{rating}</h5>
            <small>{props.user.name}</small>
        </div>
    )
}
//this is used for the default export
export default RestrauntCard