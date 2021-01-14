import React, { Component } from 'react';
import Button from './../../Buttons/Button/Button';

import classes from './ClockDisplay.css';
import Input from './../../Input/Input';
import classesBtn from './../../Buttons/Button/Button.css';
import closeBtn from './../../../assets/images/close2.svg';

import NewResContext from './../../../context/newRes-context';

class ClockDisplay extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        show: true,
    }
    
    static contextType = NewResContext;

    hideBox = () => {
        this.setState({show: false})
    }

    render() {
        const { endMemo } = this.props;
        return (
            <React.Fragment>
                {endMemo ? <div className={`${classes.Background} ${!this.state.show ? classes.Hide : ''}`}>
                    <Button src={closeBtn} onClick={() => {
                        this.props.saveRes(); this.hideBox(); this.context.isNew()}} faded={classesBtn.FadedEffect}/>
                    <div className={[classes.WinBox, classes.PopupEffect].join(' ')}>
                        <p className={classes.Text}>Gratulacje!</p>
                        <p className={classes.Info}>Poziom: <span style={{fontWeight: '700'}}>{this.props.level ? 'ŁATWY' : 'TRUDNY'}</span></p>
                        <p className={classes.Info}>Wygrana! Twój wynik to: <span className={classes.TimeResult}>{this.props.stopTime}</span></p>
                        <Input placeholder='Wpisz swoje imię' changed={this.props.changed}/>
                    </div>
                </div> :
                <span className={classes.Clock}>
                    {this.props.time}
                </span>}
            </React.Fragment>
        )
    }
    
};

export default ClockDisplay