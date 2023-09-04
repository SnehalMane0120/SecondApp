import React, { Component } from 'react'
import Lifecycle2 from './Lifecycle2';

export class LifeCycle extends Component {
  constructor(props){
    super(props)
    this.state = {
      name :"victor"
    }
    console.log("Lifecycle constructor");
  } 
static getDerivedStateFromProps(Props,State){
  console.log("Lifecycle getDerivedState From props");
  return null;
  
}
componentDidMount(){
  console.log("LifeCycle componentDidMount");
}
shouldComponentUpdate(){
  console.log("Lifecycle shoudupdate methid");
}
getSnapshotBeforeUpdate(){
  console.log("lifecycle getshote ");
}
componentDidUpdate(){
  console.log("Lifecycle component DidUpdate");
}
  render() {
    console.log("Lifecycle render method");
    return (
      <>
      <div>
        LifeCycle</div>
        <button type ="button" onclick={this.changeState}>Updating</button>
        <Lifecycle2/>
        </>
    
    )
  }
}

export default LifeCycle
