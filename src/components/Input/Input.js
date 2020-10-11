import React from 'react';
import classes from './Input.css';

const input = (props) => {
    let input = null;

    switch (props.elementType) {
        case ('input'): 
        input = <input className={classes.Input}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />
        break;

        case ('textarea'):
        input = <textarea
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />
        break;

        case ('select'):
            input = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
        break;

    default:
        input = <input
                className={classes.Input}
                {...props.elementConfig}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.changed} />;

    }

    return (
        <div className={classes.InputForm}>
            <label>{props.label}</label>
            {input}
        </div>
    );
};

export default input