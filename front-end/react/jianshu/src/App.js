import React, {Component, Fragment} from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './common/header/index'
import {GlobalIconFont} from "./statics/iconfont/iconfont.js"
import './App.css';
import GlobalStyle from "./style";
import store from './store'
import Home from './pages/home'
import Detail from './pages/detail'

class App extends Component {
    render() {
        return (
            <Fragment>
                <Provider store={store}>
                    <div>
                        <Header></Header>
                        <BrowserRouter>
                            <div>
                                <Route path = '/' exact component={Home}></Route>
                                <Route path = '/detail' exact component={Detail}></Route>
                            </div>
                        </BrowserRouter>
                    </div>
                </Provider>
                <GlobalIconFont></GlobalIconFont>
                <GlobalStyle></GlobalStyle>
            </Fragment>


        );
    }
}

export default App;
