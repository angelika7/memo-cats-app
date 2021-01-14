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