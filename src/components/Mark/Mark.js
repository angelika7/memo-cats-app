import React, { useState  } from 'react';
import ModalBox from './../../containers/ModalBox/ModalBox';
import Button from './../../components/Buttons/Button/Button';
import Results from './../Results/Results';

import classes from './Mark.css';

//const Results = React.lazy(() => import('./../Results/Results'));

const Mark = (props) => {
    const [open, setOpen] = useState(false);

    return( 
        <div className={`${classes.ResultsBox} ${open ? classes.Show : ''}`}>
            <div className={`${classes.BestResults} ${open ? classes.Active : ''}`}>
                <ModalBox title={props.title}>
                    <ol>
                    {open && props.bestTimes.map(element => (
                        <Results 
                            key={element.key}
                            level={element.level}
                            time={element.time}
                            name={element.customer.name} />
                        ))}
                    </ol>
                </ModalBox>
            </div>
            <Button onClick={() => {setOpen(!open)}} src={props.src} />
        </div>
    );  
};

export default Mark