import React from 'react';
import ReactDOM from 'react-dom';
import NotPermited from './streams/NotPermited';

const Modal = props => {
    const admin = (
        <React.Fragment>
            <div className="header">{props.title}</div>
            <div className="content">{props.content}</div>
            <div className="actions">{props.actions}</div>
        </React.Fragment>
    )
    const nonAdmin = (
        <NotPermited />
    )
    const render = props.userId === props.currentUserId ? admin : nonAdmin;

    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={(event)=> event.stopPropagation()} className="ui standard modal visible active">
                {render}       
            </div>
        </div>,
        document.querySelector('#modal')
        
    );
};


export default Modal;