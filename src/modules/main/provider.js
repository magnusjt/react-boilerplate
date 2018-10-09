import {connect} from 'react-redux'

import RouteMain from './components/RouteMain'
import SomeAction from './SomeAction'

export default ioc => {
    ioc.service('Main.RouteMain', ioc => connect(state => ({
        value: state.main.someState.value
    }))(RouteMain(ioc['Layout.Layout'], ioc['Main.SomeAction'])))

    ioc.service('Main.SomeAction', ioc => new SomeAction(ioc['ReduxDispatch'], ioc['ReduxGetState'], ioc['Api']))
}