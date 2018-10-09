import Layout from './components/Layout'

export default ioc => {
    ioc.service('Layout.Layout', ioc => Layout)
}