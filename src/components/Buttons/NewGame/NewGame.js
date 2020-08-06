import React from 'react';

import classes from './NewGame.css'

const newGame = (props) => {
    return (
        !props.watch && props.showLevels ?
            <button className={classes.Button} onClick={props.startGame}>Rozpocznij grę</button>
            : <button className={classes.Button} onClick={props.newGame}>Nowa gra</button>
    );
};

export default newGame