import React from 'react';
import classes from './spendBreakDown.module.css';

const spendBreakDown = (props) => {
        return (
        <div className={classes.spending_root}>
            <div className={classes.spending_heading}>
                <h3>Spending Breakdown</h3>
            </div>
            <div className={classes.spending_list}>
                {props.spendings.map((spending ,idx) => {
                    const date = new Date(+spending.date);
                    delete spending.date;
                    return (
                    <div className={classes.spending_card} key={idx}>
                        <div className={classes.image_container_red}>
                            <img src="/cart1.png"  alt="cart"/>
                        </div>
                        <div className={classes.text}>
                            <div className={classes.text_container}>
                                <span className={classes.heading}>{Object.keys(spending)[0]} </span>
                                <span className={classes.date}> {date.toDateString()} </span>
                            </div>
                            <span className={classes.total}>- $ {Object.values(spending)[0]}</span>
                        </div>
                    </div>
                    );
                })}               
            </div>
        </div>
    )
}

export default spendBreakDown