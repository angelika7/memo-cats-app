import React, { Component, Suspense } from 'react';
import ModalBox from './../../containers/ModalBox/ModalBox';
import Button from './../../components/Buttons/Button/Button';
import regeneratorRuntime from "regenerator-runtime";

import classes from './Mark.css';
import axios from './../../axios';

const Results = React.lazy(() => import('./../Results/Results'));

class Mark extends Component {
    state = {
        isShow: false,
        allTimes: null,
        bestTimes: null
    }

    componentDidMount() {
        this.getData()
    }

    async getData() {
        await axios.get('https://react-memo-app-df524.firebaseio.com/results.json')
            .then((response) => {
                let users = response.data;
                let allUsers = Object.keys(users).map(key => {
                    let ar = users[key]
                 
                    // Apppend key if one exists (optional)
                    ar.key = key
                    return ar
                }).sort((a,b) => {
                    return ('' + a.time).localeCompare(b.time)
                })

                this.setState({allTimes: allUsers});
                console.log(this.state.allTimes)
            })
    }

    onClickHandler = () => {
        this.setState({isShow: !this.state.isShow})
    }

    render() {

        return (
            <div className={`${classes.ResultsBox} ${this.state.isShow ? classes.Show : ''}`}>
                <div className={`${classes.BestResults} ${this.state.isShow ? classes.Active : ''}`}>
                    <ModalBox title={this.props.title}>
                        <ol>
                            {/* {this.getData().map((el, key) => ( */}
                                <Suspense fallback={<div>Wczytywanie...</div>}>
                                    <Results
                                        key='0'
                                        time='W trakcie implementacji'
                                    />
                                </Suspense> 
                            {/* ))} */}
                        </ol>
                    </ModalBox>
                </div>
                <Button onClick={this.onClickHandler} src={this.props.src} />
            </div>
        );
    }
    
};

export default Mark