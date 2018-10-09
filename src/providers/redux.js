import {composeWithDevTools} from 'redux-devtools-extension'
import {applyMiddleware, compose, createStore} from 'redux'
import createReducer from '../createReducer'

export default ioc => {
    ioc.service('ReduxStore', ioc => {
        const rfr = ioc['ReduxFirstRouter']

        const otherReducers = {location: rfr.reducer, route: ioc['routeReducer']}
        const reducer = createReducer(otherReducers)

        return createStore(
            reducer,
            composeWithDevTools(
                compose(
                    rfr.enhancer,
                    applyMiddleware(rfr.middleware)
                )
            )
        )
    })

    ioc.service('ReduxGetState', ioc => {
        return () => {
            let store = ioc['ReduxStore']
            return store.getState()
        }
    })

    ioc.service('ReduxDispatch', ioc => {
        let store = ioc['ReduxStore']

        return (...args) => {
            try{
                store.dispatch(...args)
            }catch(err){
                console.error('Error during dispatch', err)
            }
        }
    })
}