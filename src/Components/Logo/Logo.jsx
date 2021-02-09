import { checkPropTypes } from 'prop-types';
import React from 'react';
import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.scss";

const Logo = ({height, style}) => {
  return (
    <div className={classes.Logo} style={{height, ...style}}>
      <img src={burgerLogo} alt="MyBurger"/>
    </div>
  );
}

export default Logo;
