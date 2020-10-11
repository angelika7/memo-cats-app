import React from 'react';
import NavigationItems from './../NavigationItems/NavigationItems';

import classes from './Toolbar.css';

const toolbar = (props) => (
    <nav className={classes.Navigation}>
        <NavigationItems isAuthenticated={props.isAuth} />
    </nav>
);

export default toolbar;