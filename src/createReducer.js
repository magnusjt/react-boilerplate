import {combineReducers} from 'redux';

import main from './modules/main/reducer'

export default function(otherReducers = {}){
    return combineReducers({
        main,

        ...otherReducers
    })
}