import { takeLatest } from 'redux-saga/effects';
import { fetchDataAction} from '../actions';
import {fetchData} from './fetchDataSaga'

export default function* rootSaga() {
    yield takeLatest(fetchDataAction().type, fetchData);
}
