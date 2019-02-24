import React, { Component } from 'react';
import Header from '../shared/components/layout/Header'
import Content from '../shared/components/layout/Content'
import Footer from '../shared/components/layout/Footer'
import Todo from './Todo/Todo'
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Header title="Welcome to React" url="http://www.baidu.com"></Header>
          <Content><Todo></Todo></Content>
          <Footer></Footer>
      </div>
    );
  }
}

export default App;
