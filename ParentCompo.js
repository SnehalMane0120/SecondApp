import React, { Component, PureComponent } from 'react'


export class ParentCompo extends Component {
    constructor(name){
        super(name)
        this.state={
            name:"john"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({name:"victor"})
    },5000)
    }
  render()
   {
    console.log("----Parentcomp------");
    return (
     <>
     <h3>this is Parent Component</h3>
     <Regcompo name={this.state.name}/>
     <PureCompo name={this.state.name}/>
     
     
     
    
     </>
    )
  }
}

export default ParentCompo
