import React from 'react';
import { render } from 'react-dom';
import App from './containers/app'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import store, {history} from './store'

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>, document.getElementById('app-root')
);