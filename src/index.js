import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from "redux-promise";
import App from './containers/App';
import reducers from './reducers';
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';
const middleware = [ thunk, ReduxPromise ];


const store = createStore(
    reducers,
    applyMiddleware(...middleware)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
