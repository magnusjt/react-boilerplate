import React, {Component} from 'react'

/**
 * @param Layout
 * @param {SomeAction} someAction
 */
export default (Layout, someAction) =>
class RouteWelcome extends Component{
    render(){
        return (
            <Layout subtitle="Main">
                <h1>Main</h1>

                <button onClick={() => someAction.someAction('Set from main')} className="btn btn-primary">Set value</button>

                Value: {this.props.value}
            </Layout>
        )
    }
}