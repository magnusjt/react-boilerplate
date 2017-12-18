import React, {Component} from 'react';

export default (Login) =>
class RouteWelcome extends Component{
    render() {
        return (
            <div>
                <h1>Welcome</h1>

                <Login />
            </div>
        );
    }
}