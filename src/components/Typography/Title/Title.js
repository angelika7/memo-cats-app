import React from 'react';

import classes from './Title.css';

const title = (props) => {
    return (
    <React.Fragment>
        <p className={`${classes.Title} ${props.hello ? classes.Hello : ''}`}>{props.title}</p>
    </React.Fragment>    
    );
};

export default title