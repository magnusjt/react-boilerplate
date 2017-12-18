import {connectRoutes} from 'redux-first-router'
import {composeWithDevTools} from 'redux-devtools-extension'
import {applyMiddleware, compose, createStore} from 'redux'
import createHistory from 'history/createBrowserHistory'
import createReducer from '../createReducer'
import Api from '../util/Api'

export default ioc => {
    ioc.service('CONFIG', ioc => {
        let isDev = process.env.NODE_ENV === 'development'

        return {
            API_TYPE: isDev ? 'mock' : 'real'
        }
    })

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

    ioc.service('ReduxFirstRouter', ioc => {
        const history = createHistory()

        // NB: Prevent initial dispatch. Do that after container is finished setting up to avoid routing before the ioc container is created.
        return connectRoutes(history, ioc['RouteMap'], {initialDispatch: false})
    })

    ioc.service('run', ioc => {
        let store = ioc['ReduxStore']

        return (type, data = {}) => {
            try {
                store.dispatch({type, ...data});
            }catch(err){
                console.error(err);
            }
        }
    })

    ioc.service('Api', ioc => new Api())
    ioc.service('DummyApi', ioc => {
        // This is just an example of using mock API calls. NB: In most cases it would make more sense to mock actions instead.

        let delay = time => new Promise(resolve => setTimeout(resolve, time))
        let profile = {firstname: 'Obi-Wan', lastname: 'Kenobi'}

        return {
            async request(){
                await delay(1000)
                return profile
            }
        }
    })

    ioc.service('Logger', ioc => console)
}