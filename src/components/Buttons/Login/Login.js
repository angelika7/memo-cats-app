import React from 'react';

import classes from './Login.css'

const login = (props) => {
    return (
        <button className={classes.Button} style={{width: props.width, height: props.height}} onClick={props.startGame}>{props.name}</button>
    );
};

export default login