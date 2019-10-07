import React, { Component } from "react"

class Modal extends Component {
  render() {

    if(!this.props.show) {
      return null;
    }

    return (
      <div className="Modal">
        <div>{this.props.children}</div>
        
      </div>
    )
  }
}

export default Modal
