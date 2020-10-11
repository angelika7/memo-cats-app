import React from 'react';
import classes from './Results.css';

let results = (props) => (
    <li className={classes.Result}><span className={classes.Time}>{props.time}</span>, {props.level ? 'Poziom - Łatwy' : 'Poziom - Trudny' } - {props.name}</li>
);

export default results