import { BrowserRouter as Router } from 'react-router-dom';
import React,{Component} from 'react'
import AppRoutes from './AppRoutes'
class RouterContainer extends Component{
    render(){
        return  <Router>
                    <AppRoutes />
                </Router>
    }
}

export default RouterContainer;
