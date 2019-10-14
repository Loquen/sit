import React, { Component } from "react"
import styles from './Modal.module.css';

class Modal extends Component {

  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef()
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = evt => {
    if (this.props.show && !this.wrapperRef.current.contains(evt.target)) {
      this.props.closeModal();
    }
  }

  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div className={`${styles.Modal}`} >
        <div className={`${styles.ModalBox} ${this.props.modalClassName}`} ref={this.wrapperRef}>
          {this.props.children}        
        </div>
      </div>
    )
  }
}

export default Modal
