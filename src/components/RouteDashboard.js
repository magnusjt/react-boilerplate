import React, {Component} from 'react';

export default (Profile, Logout) =>
    class RouteWelcome extends Component{
        render() {
            return (
                <div>
                    <h1>Dashboard</h1>
                    <Profile />
                    <Logout />
                </div>
            );
        }
    }