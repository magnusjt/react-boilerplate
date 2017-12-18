import Container from './util/Container'
import actions from './providers/actions'
import components from './providers/components'
import routing from './providers/routing'
import other from './providers/other'

export default () => {
    let ioc = new Container();

    actions(ioc);
    components(ioc);
    routing(ioc);
    other(ioc);

    return ioc;
};