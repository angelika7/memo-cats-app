import React from 'react';

import { Link } from 'react-router-dom';
import GameLevel from './../Buttons/GameLevel/GameLevel'
import ModalBox from './../../containers/ModalBox/ModalBox'

import classes from './Auth.css';


const auth = (props) => {
    return (
        <div className={classes.Container}>
            <div className={classes.Content}>
                <ModalBox title="Witaj w MemoCats App" hello={true}
                    bgColor= "rgba(var(--color-yellow-light-3), .85)"
                >
                    <div className={classes.AuthBox}>
                        <Link to="/register"><GameLevel width= '320px' height= '60px' onClick={props.clicked} name='Logowanie/Rejestracja' /></Link>
                        <Link to="/"><GameLevel width= '320px' height= '60px' onClick={props.clicked} name='Graj jako gość' /></Link>
                    </div>
                </ModalBox>
            </div>
        </div>
    );
};

export default auth