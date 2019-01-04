import React, {Component, Fragment} from 'react';
import Header from './common/header/index'
import './App.css';
import {GlobalIconFont} from "./statics/iconfont/iconfont.js"
import GlobalStyle from "./style";
class App extends Component {
    render() {
        return (
            <Fragment>
                <Header></Header>
                <GlobalIconFont></GlobalIconFont>
                <GlobalStyle></GlobalStyle>
            </Fragment>


        );
    }
}

export default App;
