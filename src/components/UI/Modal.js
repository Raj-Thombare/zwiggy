import React from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'

const Backdrop = () => {
    return <div className={classes.backdrop} />
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const elementRoot = document.getElementById('modalOverlay-root');

const Modal = (props) => {
  return (
    <>
        {ReactDOM.createPortal(<Backdrop />,elementRoot)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,elementRoot)}
    </>
  )
}

export default Modal
