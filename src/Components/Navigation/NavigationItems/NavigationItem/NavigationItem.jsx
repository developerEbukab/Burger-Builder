import { checkPropTypes } from 'prop-types';
import React from 'react';
import classes from "./NavigationItem.module.scss";

const NavigationItem = ({children, link, active}) => {
  return (
    <li className={classes.NavigationItem}>
      <a className={active && classes.active} href={link}>{children}</a>
  </li>
  );
}

export default NavigationItem;
