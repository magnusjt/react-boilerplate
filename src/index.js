import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import { Provider } from 'react-redux'
import createContainer from './createContainer'

const ioc = createContainer()
const store = ioc['ReduxStore']
const RouteRenderer = ioc['RouteRenderer']
const rfr = ioc['ReduxFirstRouter']

rfr.initialDispatch()

ReactDOM.render(
    <Provider store={store}>
        <RouteRenderer />
    </Provider>,
    document.getElementById('root')
)