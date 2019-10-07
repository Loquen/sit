import React, { Component } from "react"

class Modal extends Component {
  render() {

    if(!this.props.show) {
      return null;
    }
    
    return (
      <div className="Modal">
        <header>{this.props.title}</header>
        <div>{this.props.children}</div>
        <footer>
          <button>CANCEL</button> <button>SET</button>
        </footer>
      </div>
    )
  }
}

export default Modal
