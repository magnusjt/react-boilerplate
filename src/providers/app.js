import Api from '../util/Api'

export default ioc => {
    ioc.service('onAppStart', ioc => {
        const rfr = ioc['ReduxFirstRouter']

        const load = async () => {
            // Anything you wish to load when the app starts goes here
        }

        return () => load().catch().then(() => {
            rfr.initialDispatch()
        })
    })

    ioc.service('Api', ioc => new Api())
}