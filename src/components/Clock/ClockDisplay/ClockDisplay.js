import React, { Component } from 'react';
import Button from './../../Buttons/Button/Button';

import classes from './ClockDisplay.css'
import classesBtn from './../../Buttons/Button/Button.css';

class ClockDisplay extends Component {
    state = {
        show: true,
    }

    hideBox = () => {
        this.setState({show: false})
    }

    render() {
        let endMemo = this.props.time.endMemo;
        let minutes = this.props.time.minutes;
        let seconds = this.props.time.seconds;
        let miliseconds = this.props.time.miliseconds;
        let timeWatch = null;
            
        if(minutes < 10) {
            minutes = '0' + minutes
        }
        if(seconds < 10) {
            seconds = '0' + seconds
        }

        if(miliseconds < 10) {
            miliseconds = '00' + miliseconds
        } else if(miliseconds < 100) {
            miliseconds = '0' + miliseconds
        }
    
        timeWatch = (
            `${minutes}:${seconds}:${miliseconds}s.`
        )
        
        return (
            <React.Fragment>
                {endMemo ? <div className={`${classes.Background} ${!this.state.show ? classes.Hide : ''}`}>
                    <Button src={'./images/close2.svg'} onClick={() => {
                        this.props.saveRes();this.hideBox()}} faded={classesBtn.FadedEffect}/>
                    <div className={[classes.WinBox, classes.PopupEffect].join(' ')}>
                        <p className={classes.Text}>Gratulacje!</p>
                        <p className={classes.Info}>Poziom: <span style={{fontWeight: '700'}}>{this.props.level ? 'ŁATWY' : 'TRUDNY'}</span></p>
                        <p className={classes.Info}>Wygrana! Twój wynik to: <span className={classes.TimeResult}>{timeWatch}</span></p>
                    </div>
                </div> :
                <span className={classes.Clock}>
                    {timeWatch}
                </span>}
            </React.Fragment>
        )
    }
    
};

export default ClockDisplay