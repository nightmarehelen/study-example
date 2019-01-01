import React, {Component} from "react"
import TodoListUI from "./TodoListUI"
import {getInputChangeAction, getAddTodoItemAction, getDeleteTodoItemAction} from "./store/actionCreators";

import store from "./store"

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState();

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.addTodoListClicked = this.addTodoListClicked.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return (<TodoListUI
            inputValue = {this.state.inputValue}
            handleInputChange = {this.handleInputChange}
            addTodoListClicked = {this.addTodoListClicked}
            deleteItem = {this.deleteItem}
            list = {this.state.list}
        />)
    }

    handleInputChange(e){
        console.log(e.target.value);
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action)
    }

    handleStoreChange(){
        this.setState(store.getState());
        console.log(this.state);
    }

    addTodoListClicked(){
        const action = getAddTodoItemAction();
        store.dispatch(action);
        console.log("addTodoListClicked");
    }

    deleteItem(index){
        const action = getDeleteTodoItemAction(index);
        store.dispatch(action);
        console.log(index);
    }
}

export default TodoList;