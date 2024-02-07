import classes from './Modal.module.css';
import { Fragment} from 'react';
import  ReactDOM  from 'react-dom';

const Backdrop = () =>{
    return (
        <div className={classes.backdrop}></div>
    )
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const overlayElement = document.getElementById('overlays');

const Modal = (props) => {
    

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />,overlayElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,overlayElement)}
        </Fragment>
    )
}

export default Modal;