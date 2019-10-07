import React from "react"

const Modal = (props) => {
	return (
		<div className="Modal">
			<header>{props.title}</header>
			<div>{props.children}</div>
			<footer>
				<button>CANCEL</button> <button>SET</button>
			</footer>
		</div>
	)
}

export default Modal
