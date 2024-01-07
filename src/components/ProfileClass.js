//this is the way to create class componet here the render methode is import thing wiht out 
//this wont work and it will return somthing

import React from "react"
class Profile extends React.Component{
    constructor(props){
        super  (props);
        //create state  ===in class compoent we create state inisde the constructor
        //becaues this is called first when the class component is called because constructori  is called first
        this.state={
            count:0,
            count2:0
        }
    }
    //impt
    //every time a componetn is render mouting will happend 
    //if the componet does not have a state then update will not work
    //if we leave the component then only the umouting happen
    componentDidMount() {
        //this is life cyle methode this will called after the componet render has called
        //this is the best place to make an api call
        //this componentDidMount  can be make async
        
        console.log("jii")
      }
      //component did Update
      componentDidUpdate(prevProps,prevState){
          //this will called after every render of the component
          //this will we called when ever the state change or any update has made then this will be called after the rendering
          if(this.state.count !==prevState.count){
            //this methode is used insted of the dependency array in useEffects
            //this was really difficult to do

        }
      }
      componentWillUnmount(){
        //this is used for clean up inorder to ovoid unnessary thing running in the componet after we leave this
        //this life cycle will be called when we exit form the componet or leave the componet
      }
  
    //redender function is most important thing in class compoent with out this wount wrk
    render(){
        //we call also destructor it useing 
        let {count}=this.state //this count can be used here it is destructor
        return(
            <>
            <h1>hello class component</h1>
            <small>{this.props.age}</small>
            <h6>state in count:{this.state.count}</h6>
            <button onClick={()=>{
                this.setState({count:this.state.count+1}
                    //THE SETSTATE will render it onces again
                    )
            }}>Add</button>
        
            </>
        )
    }
}

export default Profile;