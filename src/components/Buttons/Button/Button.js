import React from 'react';

import classes from './Button.css';

const button = (props) => {
    return (
        <button className={[classes.Button, props.faded].join(' ')} onClick={props.onClick}>
            <img className={classes.Img} src={props.src}/>
        </button>
    );
};

export default button