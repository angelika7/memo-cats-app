import React from 'react';

import classes from './GameLevel.css'

const gameLevel = (props) => {

        return (
             <button 
            className={props.isActive ? [classes.Button, classes.Active].join(' ') : classes.Button } 
            onClick={props.onClick}
            style={{width: props.width, height: props.height}}>{props.name}</button> 
        )

};

export default gameLevel