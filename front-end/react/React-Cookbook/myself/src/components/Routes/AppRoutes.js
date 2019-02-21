// Dependencies
import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Error404 from './Error/404';
import About from './About';
import Contact from './Contact';
import Coins from '../Coins'
import Notes from './Notes'
import Todo from '../Todo'
import './AppRouter.css'
// Components
import Home from './Home';

const AppRoutes = () => (
    <div className="App-router">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/notes">Notes</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/coins">Coins</Link></li>
            <li><Link to="/todos">Todos</Link></li>
        </ul>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About} exact/>
            <Route path="/contact" component={Contact} exact/>
            <Route path="/notes" component={Notes} exact/>
            <Route path="/notes/:noteId" component={Notes} exact/>
            <Route path="/coins" component={Coins} exact />
            <Route path="/todos" component={Todo} exact />
            <Route component={Error404}/>
        </Switch>
    </div>
);

export default AppRoutes;
