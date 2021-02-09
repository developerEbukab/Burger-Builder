import React from 'react';
import Aux from '../../Hoc/Aux';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <SideDrawer/>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  );
}

export default Layout;
