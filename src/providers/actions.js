import AuthAction from '../actions/AuthAction'

export default ioc => {
    ioc.service('AuthAction', ioc => new AuthAction(ioc['run'], ioc['DummyApi']))
}