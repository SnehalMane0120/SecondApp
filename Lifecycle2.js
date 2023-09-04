import React, { Component } from 'react'

export class Lifecycle2 extends Component {
    constructor(props){
        super(props)
        this.state = {
          name :"victor"
        }
        console.log("Lifecycle2 constructor");
      } 
    static getDerivedStateFromProps(Props,State){
      console.log("Lifecycle2 getDerivedState From props");
      return null;
      
    }
    componentDidMount(){
      console.log("LifeCycle2 componentDidMount");
    }
  render() {
    
    console.log("Lifecycle render method");
    return (
      <div>----Lifecycle2----</div>
    )
  }
}

export default Lifecycle2
