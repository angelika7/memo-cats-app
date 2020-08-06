import React from 'react';

import classes from './Login.css'

const login = (props) => {
    return (
        <button className={classes.Button} onClick={props.startGame}>{props.name}</button>
    );
};

export default login