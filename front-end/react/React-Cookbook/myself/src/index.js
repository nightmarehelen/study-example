import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const unmountButton = document.getElementById('unmount');

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

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
