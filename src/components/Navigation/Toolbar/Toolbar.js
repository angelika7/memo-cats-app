import React from 'react';
import NavigationItems from './../NavigationItems/NavigationItems';

import classes from './Toolbar.css';

const toolbar = (props) => (
    <nav className={!props.clicked ? classes.Hide : classes.Navigation}>
        <NavigationItems />
    </nav>
);

export default toolbar;