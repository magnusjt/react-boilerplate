import { combineReducers } from 'redux';
import CONSTANTS from './actionTypes'

import profile from './reducers/profile';
import dashboard from './reducers/dashboard';
import login from './reducers/login';
import logout from './reducers/logout';

export default function(otherReducers = {}){
    const reducer = combineReducers({
        profile,
        dashboard,
        login,
        logout,
        ...otherReducers
    });

    return (state, action) => {
        // Reset all state when logging out
        if(action.type === CONSTANTS.LOGOUT_SUCCESS){
            state = undefined
        }

        return reducer(state, action)
    };
}