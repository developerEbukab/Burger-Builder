import React from 'react'
import classes from "./DrawerToggle.module.scss"

const DrawerToggle = ({clicked}) => (
  <div onClick={clicked} className={classes.DrawerToggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
)
export default DrawerToggle;