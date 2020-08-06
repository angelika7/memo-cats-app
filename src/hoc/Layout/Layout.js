import React, { Component } from 'react';
import Slogan from './../../components/Typography/Slogan/Slogan';
import Toolbar from './../../components/Navigation/Toolbar/Toolbar';
import Mark from './../../components/Mark/Mark';
import Auth from './../../components/Auth/Auth';

import asyncComponent from './../asyncComponent/asyncComponent';

import classes from './Layout.css';

class Layout  extends Component {
    state = {
        isClicked: false
    }

    render() {

        return (
            <div className={classes.Content}>
                {!this.state.isClicked ? <Auth clicked={()=> {this.setState({isClicked: true})}} /> : null }
                <Toolbar clicked={this.state.isClicked} />
                <header className={classes.Header}>
                    <Slogan />
                </header>
                
                <main className={classes.Container}>
                    <div className={classes.MainBox}>
                        <img className={classes.Img} src={'./images/cat4.svg'}/>
                            {this.props.children}
                        <img className={[classes.Img, classes.Hide].join(' ')} src={'./images/cat5.svg'}/>
                    </div>
                    <div className={classes.Results}>
                        <Mark src={'./images/medal1.svg'} title="Najlepsze wyniki"/>
                        <Mark src={'./images/medal2.svg'} title="Twoje najlepsze wyniki"/>
                    </div> 
                </main>
                <footer className={classes.Footer}>2020. Aplikację wykonała Angelika Chochorowska &copy; wszystkie prawa zastrzeżone</footer>
            </div>
        );

    }

    
};

export default Layout