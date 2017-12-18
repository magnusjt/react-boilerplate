import CONSTANTS from '../actionTypes';

let initialState = {
    tab: 'defaultTab'
};

export default function(state = initialState, action){
    if(action.type === CONSTANTS.ROUTE_DASHBOARD){
        return {...state, tab: action.payload.tab};
    }

    return state;
}