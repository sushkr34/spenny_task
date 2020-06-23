import React from 'react';
import classes from './monthSelection.module.css';

const monthSelection = (props) => {
    return (
        <div className={classes.monthly_root}>
            <div className={classes.monthly}>
                <select name="month" id="monthly" className={classes.monthly_Value}>
                    <option value="monthly" className={classes.drop_Value}>Monthly</option>
                    <option value="yearly">Yearly</option>
                </select>
            </div>
            <div className={classes.months}>
                {props.month.map((item,idx)=>{
                    return (<button key={idx}>{item}</button>)
                })}
            </div>

        </div>
    )
}

export default monthSelection