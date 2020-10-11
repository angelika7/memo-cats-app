import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

const navigationItems = (props) => (
    <ul className={classes.List}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        {props.isAuthenticated ? <NavigationItem link="/logout">Wylogowanie</NavigationItem> : <NavigationItem link="/register">Logowanie/Rejestracja</NavigationItem>}
    </ul>
)

export default navigationItems