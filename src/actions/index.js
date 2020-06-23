import {
    FETCH_USER_DATA,
    FETCH_DATA
} from '../actionTypes'

const fetchUserData=(data)=>{
    return {
        type:FETCH_USER_DATA,
        data
    }
}

const fetchDataAction=()=> {
  return {
    type: FETCH_DATA
  }
}

  export {
      fetchUserData,
      fetchDataAction
  }