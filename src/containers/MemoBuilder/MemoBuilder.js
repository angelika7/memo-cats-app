import React, { Component } from 'react';

import classes from './MemoBuilder.css';

const memoBuilder = ({ children, isEasy }) => {
    return (
        isEasy ? <div className={[classes.BoardEasy, classes.ShowMemo].join(' ')}>
            {children}
        </div> : <div className={[classes.BoardHard, classes.ShowMemo].join(' ')}>
            {children}
        </div>
         
    )
    
}

export default memoBuilder