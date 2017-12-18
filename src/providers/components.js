import { connect } from 'react-redux'
import _ from 'lodash'

import Profile from '../components/Profile'
import Login from '../components/Login'
import Logout from '../components/Logout'

import RouteDashboard from '../components/RouteDashboard'
import RouteWelcome from '../components/RouteWelcome'
import RouteRenderer from '../components/RouteRenderer'

let connectProps = (mapping = {}) => {
    return connect(state => {
        return Object.entries(mapping).reduce((props, [from, to]) => {
            _.set(props, to, _.get(state, from))
            return props
        }, {})
    })
}

export default ioc => {
    ioc.service('Profile', ioc => connectProps({profile: 'profile'})(Profile()))
    ioc.service('Login', ioc => connectProps({login: 'login'})(Login(ioc['AuthAction'])))
    ioc.service('Logout', ioc => connectProps({logout: 'logout'})(Logout(ioc['AuthAction'])))

    ioc.service('RouteDashboard', ioc => connectProps()(RouteDashboard(ioc['Profile'], ioc['Logout'])))
    ioc.service('RouteWelcome', ioc => connectProps()(RouteWelcome(ioc['Login'])))

    // Connect the special 'route' property from state (see: routeReducer)
    ioc.service('RouteRenderer', ioc => connectProps({route: 'route'})(RouteRenderer(ioc['RouteToComponentMap'])))
}