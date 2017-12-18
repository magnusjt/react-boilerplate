import CONSTANTS from '../actionTypes';

let initialState = ''

export default function(state = initialState, action){
    if([CONSTANTS.LOGIN_ATTEMPT, CONSTANTS.LOGIN_SUCCESS, CONSTANTS.LOGIN_FAILURE].includes(action.type)){
        return action.type
    }

    return state;
}