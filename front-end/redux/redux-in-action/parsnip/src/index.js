import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import taskReducers from './reducers'
import {logger, analytics, apiMiddleware} from './middleware'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';


const rootReducer = (state = {}, action) => {
    return {
        tasks: taskReducers(state.tasks, action),
    };
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, sagaMiddleware, logger, analytics, apiMiddleware))
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        ReactDOM.render(
            <Provider store={store}><NextApp/></Provider>,
            document.getElementById('root')
        );
    });

    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers').default;
        store.replaceReducer(nextRootReducer);
    });
}
