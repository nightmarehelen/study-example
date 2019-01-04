import React, {Component, Fragment} from 'react';
import {Provider} from 'react-redux'

import Header from './common/header/index'
import {GlobalIconFont} from "./statics/iconfont/iconfont.js"
import './App.css';
import GlobalStyle from "./style";
import store from './store'

class App extends Component {
    render() {
        return (
            <Fragment>
                <Provider store={store}>
                    <Header></Header>
                </Provider>
                <GlobalIconFont></GlobalIconFont>
                <GlobalStyle></GlobalStyle>
            </Fragment>


        );
    }
}

export default App;
