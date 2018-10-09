import ACTION_TYPES from './actionTypes'

export default class SomeAction{
    /**
     * @param dispatch
     * @param getState
     * @param {Api} api
     */
    constructor(dispatch, getState, api){
        this._dispatch = dispatch
        this._getState = getState
        this._api = api
    }

    async someAction(value){
        console.log('value before action', this._getState().main.someState.value)
        this._dispatch({type: ACTION_TYPES.SOME_ACTION, value})
    }
}