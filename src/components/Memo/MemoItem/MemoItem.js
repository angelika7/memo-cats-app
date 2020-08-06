import React from 'react';

import classes from './MemoItem.css';

const memoItem = ({ item, index, onClick }) => (

    <div className={classes.Scene}>
        {item && (
            <div
                className={`${classes.Card} ${item.flipped ? classes.IsFlipped : ''}`}
                onClick={() => {if(!item.solved) {onClick(item, index)}}}>

                <div className={[classes.CardStyle, classes.CardStyleFront].join(' ')} />
                <div
                    className={[classes.CardStyle, classes.CardStyleBack].join(' ')}
                    style={{
                        background: `url(${item.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
        
                </div>
            </div>
        )}
    </div>
)

export default memoItem

/* firstCardIsClicked = (e) => {
    const card = e.target.src;
    console.log(card)
    this.setState({isFlipped: !this.state.isFlipped,
                    canFlip: !this.state.canFlip})
    if(this.pair.length === 0) {
        this.pair.push(card)
    }

    if(!this.state.isFlipped) {
        this.setState(prevstate => ({ flipNum: prevstate.flipNum + 1}))
    } else {
        this.setState(prevstate => ({ flipNum: prevstate.flipNum - 1}))
    }

    console.log(this.pair) 
}

secondCardIsClicked(e) {
    if(this.state.flipNum === 0) {
        this.firstCardIsClicked()
    } else if(this.state.flipNum === 1) {
        const card = e.target.src;
        console.log(card)
        this.setState({isFlipped: !this.state.isFlipped,
                        canFlip: !this.state.canFlip})
        if(this.pair.length < 2) {
            this.pair.push(card)
        }

        if(!this.state.isFlipped) {
            this.setState(prevstate => ({ flipNum: prevstate.flipNum + 1}))
        } else {
            this.setState(prevstate => ({ flipNum: prevstate.flipNum - 1}))
        }
    }
} */