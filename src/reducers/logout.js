import CONSTANTS from '../actionTypes';

let initialState = ''

export default function(state = initialState, action){
    if([CONSTANTS.LOGOUT_ATTEMPT, CONSTANTS.LOGOUT_SUCCESS, CONSTANTS.LOGOUT_FAILURE].includes(action.type)){
        return action.type
    }

    return state;
}