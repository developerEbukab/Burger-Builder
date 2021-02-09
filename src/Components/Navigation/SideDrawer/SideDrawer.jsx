import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from "./SideDrawer.module.scss";

const SideDrawer = () => {
  return (
    <div className={classes.SideDrawer}>
      <Logo height="11%" style={{marginBottom: "32px"}}/>
      <nav>
      <NavigationItems/>
      </nav>
    </div>
  );
}

export default SideDrawer;
