import CONSTANTS from '../actionTypes'

export default ioc => {
    ioc.service('RouteMap', ioc => {
        const logger = ioc['Logger']

        return {
            [CONSTANTS.ROUTE_WELCOME]: '/',
            [CONSTANTS.ROUTE_DASHBOARD]: {
                path: '/dashboard/:tab?',
                thunk: async (dispatch, getState) => {
                    // Require profile, or go to welcome page:
                    if(!getState().profile.loaded){
                        return dispatch({type: CONSTANTS.ROUTE_WELCOME})
                    }

                    let routeParams = getState().location.payload;
                    let tab = routeParams.tab || 'defaultTab'

                    logger.log(`Navigating to dashboard (tab: ${tab})`)
                }
            }
        }
    })

    ioc.service('RouteToComponentMap', ioc => {
        return {
            [CONSTANTS.ROUTE_WELCOME]: ioc['RouteWelcome'],
            [CONSTANTS.ROUTE_DASHBOARD]: ioc['RouteDashboard']
        }
    })

    // Used to determine which component to render
    ioc.service('routeReducer', ioc => {
        const routes = [
            'ROUTE_WELCOME',
            'ROUTE_DASHBOARD'
        ]

        return function(state = CONSTANTS.ROUTE_WELCOME, action){
            if(routes.includes(action.type)){
                return action.type;
            }

            return state;
        }
    })
}