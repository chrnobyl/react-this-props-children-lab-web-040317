import React, {Component} from 'react'


export default class ThemedDecorations extends Component {
  constructor(){
    super()
  }
  render() {

    const childProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      })
    })

    return (
      <div>
        {childProps}
      </div>
    )

  }
}
