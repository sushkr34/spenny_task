import React from 'react';
import classes from './header.module.css';

const header = () => {
    return (
        <div className={classes.header_root}>
                <div className={classes.expenses}>Expense</div>
                <div className={classes.path}>
                    <img src="https://img.icons8.com/cotton/20/000000/coin-wallet--v1.png" alt="wallet" />
                </div>
        </div>
    )
}
export default header;

