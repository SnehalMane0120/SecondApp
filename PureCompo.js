import React, {pure  Component} from 'react'

export class PureCompo extends Component {
  render() {
    console.log("---this is purecompo------");
    return (
      <>
        <h3> this is PureComponent my name is {this.props.name}</h3>
      </>
    )
  }
}

export default PureCompo
