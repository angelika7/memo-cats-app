import React from 'react';
import classes from './Results.css';

let results = (props) => (
    <li>{props.time}, {props.level} - {props.name}</li>
);

export default results