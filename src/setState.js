
import React from "react";
export default class App extends React.Component{

   state={
    num:1
   }

   add = ()=>{
    this.setState({
        num: this.state.num +1
    })

    console.log(this.state.num)
    this.setState({
        num: this.state.num +1
    })

    console.log(this.state.num)
    this.setState({
        num: this.state.num +1
    })

    console.log(this.state.num)
   }




   add2 = ()=>{

    setTimeout(()=>{
        this.setState({
            num: this.state.num +1
        })
    
        console.log(this.state.num)
        this.setState({
            num: this.state.num +1
        })
    
        console.log(this.state.num)
        this.setState({
            num: this.state.num +1
        })
    
        console.log(this.state.num)
    },12)
   
   }


   render(){
    return(

        <div>
            <span>{this.state.num}</span>
      <button onClick={this.add}>add</button>
      <button onClick={this.add2}>add22</button>
        

        </div>
    )
   }
}