import React, { Component } from 'react';
import { connect } from 'react-redux';
import {    
    fetchDataAction
} from '../../actions'
import LineChart from './Components/Charts';
import classes from './mainPage.module.css';
import Header from './Components/Header'
import CardBalance from './Components/CardBalance'
import MonthSelection from './Components/monthSelection';
import SpendBreakDown from './Components/spendBreakDown';

class HomePage extends Component {
    componentDidMount() {
        this.props.fetchData()
    }
    render() {
        return (
            <>
            {this.props.data.cardBalance
                ?
                <div className={classes.expenses} >
                <Header  />
                <CardBalance   cardBalance={this.props.data.cardBalance} />
                <MonthSelection  month={this.props.data.month} />
                <LineChart dataSets={this.props.data.data.datasets} />
                <SpendBreakDown spendings={this.props.data.spending} />
            </div>
            :null}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        data: state.data
    }
}

const mapDispatchToProps = dispatch => ({
    fetchData: () => dispatch(fetchDataAction()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
