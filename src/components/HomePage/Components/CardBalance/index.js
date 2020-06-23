import React from 'react';
import classes from './cardBalance.module.css'

const cardBalance = (props) => {
    return (
        <div className={classes.cardbalance_root}>
            <div>
                <div className={classes.card_Balance}>Card Balance</div>
                <div className={classes.balance_Value}>${props.cardBalance}</div>
            </div>
            <div>
                <div className={classes.income}>
                    <img className={classes.up_Arrow} alt="income" src="https://img.icons8.com/plasticine/20/000000/long-arrow-up.png" />
                    <span className={classes.income_Value}>$6,390</span>
                </div>
                <div className={classes.income}>
                    <img className={classes.down_Arrow} alt="expense" src="https://img.icons8.com/plasticine/20/000000/down.png" />
                    <span className={classes.expense_Value}>$6,390</span>
                </div>
            </div>
        </div>
    )
}
export default cardBalance;

