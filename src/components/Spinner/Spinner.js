import React from 'react';

import classes from './Spinner.css';

const Spinner = () => (
    <div className={classes.LoaderBox}>
        <p>Ładowanie wyników...</p>
        <div className={classes.Loader}></div>
    </div>
);

export default Spinner