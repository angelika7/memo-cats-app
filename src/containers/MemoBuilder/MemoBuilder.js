import React, { Component } from 'react';

import classes from './MemoBuilder.css';

const memoBuilder = ({ children, isEasy }) => {
    return (
        isEasy ? <div className={classes.BoardEasy}>
            {children}
        </div> : <div className={classes.BoardHard}>
            {children}
        </div>
         
    )
    
}

export default memoBuilder