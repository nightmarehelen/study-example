import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './shared/redux/configureStore';

const unmountButton = document.getElementById('unmount');

const store = configureStore(window.initialState);
// Is not very common to remove a Component from the DOM,
// but this will be just to understand how
// componentWillUnmount works.
function unmount() {
    ReactDOM.unmountComponentAtNode(
        document.getElementById('root')
    );

    document.getElementById('unmountMessage')
        .style.display = 'block';

    unmountButton.remove();
}

unmountButton.addEventListener('click', unmount);

document.getElementById('unmountMessage')
    .style.display = 'none';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
