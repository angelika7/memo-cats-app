import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

const navigationItem = (props) => (
    <li className={classes.Item}>
        <NavLink 
            to={props.link}
            exact={props.exact} 
            activeClassName={classes.Active}> {props.children}
        </NavLink>
    </li>
);

export default navigationItem