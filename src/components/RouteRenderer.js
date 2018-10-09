import React, {Component} from 'react'

export default (routeToComponentMap) =>
class RouteRenderer extends Component{
    render(){
        const Route = routeToComponentMap[this.props.route]
        return Route ? <Route /> : null
    }
}