import React from 'react';
import Aux from '../../../Hoc/Aux/Aux.js';
import BackDrop from '../BackDrop/BackDrop';
import classes from "./Modal.module.scss";

const Modal = (props) => {
  return (
    <Aux>
      <BackDrop show={props.show} clicked={props.modalClosed}/>
      <div
        style={{transform: props.show ? "translate(0)" : "translate(-100vh)", opacity: props.show ? "1" : "0"}}
        className={classes.Modal}>
        {props.children}
      </div>
    </Aux>
  );
}

export default Modal;
