import React from 'react';
import classes from "./BackDrop.module.scss";

const BackDrop = (props) => {
  return (
    props.show ? <div className={classes.BackDrop} onClick={props.clicked}></div> : null
  );
}

export default BackDrop;
