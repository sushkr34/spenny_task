import { put, call} from 'redux-saga/effects';
import {fetchUserData} from '../actions';
import {userData} from '../api';

export  function* fetchData(){
    try {
        const data = yield call(userData);
        yield put(fetchUserData(data))
    }catch (e){
        console.log(e);
    }
}

