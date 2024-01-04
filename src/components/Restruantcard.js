const RestrauntCard = (props) => {
    // console.log(props);
    const {image,name,cusines,rating}=props.datalist
    
    return (
        <div className='card'>
            <img src={image} alt="" />
            <h2 style={{ fontFamily: "" }}>{name}</h2>
            <small>{cusines?.join(',')}</small>
            <h5>{rating}</h5>
        </div>
    )
}
//this is used for the default export
export default RestrauntCard