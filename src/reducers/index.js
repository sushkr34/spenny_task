import {
    FETCH_USER_DATA
} from '../actionTypes'

const defaultState = {
    loading: false,
    data: {}
}
export default function (state = defaultState, action) {
    switch (action.type) {
        case FETCH_USER_DATA:
            return {
                ...state,
                data: action.data
            }
        default:
            return state;
    }
}