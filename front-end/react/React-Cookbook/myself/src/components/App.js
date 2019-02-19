import React, {Component} from 'react';
import Header from '../shared/components/layout/Header';
import Footer from '../shared/components/layout/Footer';
import Content from '../shared/components/layout/Content';
import ChartContainer from './Charts/ChartContainer';
import Notes from './Notes/Notes';
import Todo from './Todo/Todo';
import Timer from './Pomodoro/Timer';
import Coins from './Coins/Coins';
import Animation from './Animation/Animation'
import Numbers from './Numbers/Numbers'
import Calculator from './Calculator/Calculator'
import Xss from './Xss/Xss'
import Person from './Person/Person'
import './App.css';
// This is our fake data...
import { notes1, notes2 } from './Notes/data';

class App extends Component {

    constructor() {
        super();

        // The first time we load the notes1...
        this.state = {
            notes: notes1
        };
    }

    componentDidMount() {
        // After 10 seconds (10000 milliseconds) we concatenate our
        // data with notes2...
        setTimeout(() => {
            this.setState({
                notes: [...this.state.notes, ...notes2]
            });
        }, 10000);
    }

    render() {
        return <>
            <Header title={'What a fucking day!'}></Header>
            <Content>
                <>
                    <Person></Person>
                    <Calculator></Calculator>
                    <Xss></Xss>
                    <Numbers></Numbers>
                    <Animation></Animation>
                    <ChartContainer></ChartContainer>
                    <Notes notes={this.state.notes} />
                    <Coins></Coins>
                    <Timer></Timer>
                    <Todo></Todo>
                </>
            </Content>
            <Footer></Footer>
        </>
    }
}

export default App;
