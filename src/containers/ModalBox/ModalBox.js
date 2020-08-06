import React from 'react';
import Title from './../../components/Typography/Title/Title'

import classes from './ModalBox.css';

const modalBox = (props) => {
    return (
        
    <div className={classes.Box} style={{backgroundColor: props.bgColor}}>
        <Title title={props.title} hello={props.hello} />
        {props.children}
    </div> 
    );
};

export default modalBox