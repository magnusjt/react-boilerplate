import ACTION_TYPES from './actionTypes'
import produce from 'immer'

const initialState = {
    value: ''
}

export default (state = initialState, action) => produce(state, draft => {
    if(action.type === ACTION_TYPES.SOME_ACTION){
        draft.value = action.value
    }
})