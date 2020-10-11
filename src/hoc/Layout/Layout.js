import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

import Slogan from './../../components/Typography/Slogan/Slogan';
import Toolbar from './../../components/Navigation/Toolbar/Toolbar';
import Mark from './../../components/Mark/Mark';
import Auth from './../../components/Auth/Auth';
import axios from './../../axios';

import classes from './Layout.css';

const Layout = (props) => {
    const [results, getResults] = useState([]);
    const [myResults, getMyResults] = useState([]);
    const [isClicked, setClick] = useState(false);

    const isAuthenticated = useSelector(state => state.auth.token !== null);
    const userId = useSelector(state => state.auth.userId);

    useEffect(() => {
        axios.get( '/results.json' )
            .then( res => {
                
                let fetchedResults = [];
                let easyTime = [];
                let hardTime = [];
                for ( let key in res.data ) {
                    fetchedResults.push( {
                        ...res.data[key],
                        key: key
                    });
                };

                easyTime = fetchedResults.filter(e => {
                    return e.level
                }).sort((a,b) => {
                    return ('' + a.time).localeCompare(b.time)
                }).slice(0, 3)
                hardTime = fetchedResults.filter(e => {
                    return !e.level
                }).sort((a,b) => {
                    return ('' + a.time).localeCompare(b.time)
                }).slice(0, 3)

                fetchedResults = easyTime.concat(hardTime)

                getResults(fetchedResults)
                
            })
            .catch( err => {
                console.log(err)
            } );
    });

    useEffect(() => {
        if(isAuthenticated) {
            axios.get( '/results.json' )
            .then( res => {
                
                let fetchedMyResults = [];
                
                for ( let key in res.data ) {
                    fetchedMyResults.push( {
                        ...res.data[key],
                        key: key
                    });
                };

                fetchedMyResults = fetchedMyResults.filter(e => {
                    return e.customer.id === userId
                }).sort((a,b) => {
                    return ('' + a.time).localeCompare(b.time)
                }).slice(0, 5)

                getMyResults(fetchedMyResults)
            })
            .catch( err => {
                console.log(err)
            } );
        }    
    })
    
    return (
        <div className={classes.Content}>
                {!isClicked || !isAuthenticated ? <Auth isClicked={isClicked} isAuth={isAuthenticated} clicked={() => {setClick(!isClicked)}} /> : null }
                <Toolbar isAuth={isAuthenticated} />
                <header className={classes.Header}>
                    <Slogan />
                </header>
                
                <main className={classes.Container}>
                    <div className={classes.MainBox}>
                        <img className={classes.Img} src={'./images/cat4.svg'}/>
                            {props.children}
                        <img className={[classes.Img, classes.Hide].join(' ')} src={'./images/cat5.svg'}/>
                    </div>
                    <div className={classes.Results}>
                        <Mark src={'./images/medal1.svg'} title="Najlepsze wyniki" bestTimes={results} />
                        {isAuthenticated ? <Mark src={'./images/medal2.svg'} bestTimes={myResults} title="Twoje najlepsze wyniki"/> : null}
                    </div> 
                </main>
                <footer className={classes.Footer}>2020. Aplikację wykonała Angelika Chochorowska &copy; wszystkie prawa zastrzeżone</footer>
            </div>
    )
}

export default Layout;