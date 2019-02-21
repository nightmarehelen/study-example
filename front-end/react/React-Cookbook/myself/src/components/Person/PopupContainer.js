import React,{Component} from 'react';
import Popup from 'react-popup';
import Person from './Person'
import './Popup.css'

class PopupContainer extends Component{

    render(){
        return <>
            <Person></Person>
            <Popup></Popup>
        </>
    }
}

export default PopupContainer;
