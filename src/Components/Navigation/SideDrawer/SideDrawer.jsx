import React from 'react';
import Aux from '../../../Hoc/Aux/Aux';
import Logo from '../../Logo/Logo';
import BackDrop from '../../UI/BackDrop/BackDrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from "./SideDrawer.module.scss";

const SideDrawer = ({ closed, open }) => {
  let attachedClasses = open ? [classes.SideDrawer, classes.Open] : [classes.SideDrawer, classes.Close];
  return (
    <Aux>
      <BackDrop  clicked={closed} show={ open}/>
      <div className={attachedClasses.join(" ")}>
        <Logo height="11%" style={{marginBottom: "32px"}}/>
        <nav>
        <NavigationItems/>
        </nav>
      </div>
    </Aux>
  );
}

export default SideDrawer;
