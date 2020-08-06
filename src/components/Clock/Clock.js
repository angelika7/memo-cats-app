import React, { Component } from 'react';
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';
import axios from './../../axios';

import ClockDisplay from './ClockDisplay/ClockDisplay';


class Clock extends Component {
    state = {
        miliseconds: 0,
        seconds: 0,
        minutes: 0,
        running: false,
        endMemo: false,
        stopTime: ''
    }

    componentDidMount() {
        this.startTimerHandler()
    }

    componentWillUnmount() {
        this.stopTimerHandler()
    }

    componentDidUpdate(prevProps, prevState) {

        if(prevProps.endGame !== this.props.endGame) {
            this.setState({endMemo: true});
            this.stopTimerHandler()
            console.log('Timer stop!')
        }
    }

    tick = () => { 
        this.setState({miliseconds: this.state.miliseconds + 10,
        time: this.state.time + 10});

        if(this.state.miliseconds >= 1000) {
            this.setState({seconds: this.state.seconds + 1});
            this.setState({miliseconds: 0});
        }
        if(this.state.seconds >= 60) {
            this.setState({minutes: this.state.minutes + 1});
            this.setState({seconds: 0});
        }
    }

    startTimerHandler = () => {
        if(!this.state.running) {
            this.setState({running: true});
            this.time = setInterval(() => this.tick(), 10);
        }    
    }

    stopTimerHandler = () => {
        let myTime = `${this.state.minutes}:${this.state.seconds}:${this.state.miliseconds}ms`;

        this.setState((state, props) => {
            return { running: false,
            stopTime: myTime }
        },() => console.log(this.state.stopTime, 'updated Time')); 
        
        clearInterval(this.time); 
    }

    resetTimerHandler = () => {
        this.setState({
            miliseconds: 0,
            seconds: 0,
            minutes: 0
        })
    }

    saveEndGameResultHandler = () => {
        const result = {
            time: this.state.stopTime,
            level: this.props.level,
            customer: {
                name: 'Ala',
                email: 'test@test.com'
            }
        }

        axios.post('/results.json', result)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }

    render () {
        
        return ( 
            <React.Fragment>
                <ClockDisplay time={this.state} level={this.props.level} saveRes={this.saveEndGameResultHandler}/>
            </React.Fragment>
        )
    }
}

export default withErrorHandler(Clock, axios);