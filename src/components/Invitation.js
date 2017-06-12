import React, {Component} from 'react'




export default class Invitation extends Component {
  constructor(){
    super()
  }

  
  render(){
    return (
      <div>
        <h1>You've been invited!</h1>
        <h3>{this.props.children}</h3>
      </div>
    )
  }
}
