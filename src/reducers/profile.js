import CONSTANTS from '../actionTypes';

let initialState = {
    loaded: false
}

export default function(state = initialState, action){
    if(action.type === CONSTANTS.LOGIN_SUCCESS){
        return {...action.profile, loaded: true};
    }

    return state;
}