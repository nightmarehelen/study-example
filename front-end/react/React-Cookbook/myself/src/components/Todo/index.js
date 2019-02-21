import React, {Component} from 'react';
import uuidv4 from 'uuid/v4';
import List from './List';
import TodoForm from './TodoForm';
import './Todo.css';

class Todo extends Component {
    constructor() {
        super();

        // Initial state...
        this.state = {
            items: []
        };
    }

    addTask = values => {
        // This values are coming from our
        // onSubmit method in our TodoForm.
        const {task} = values;

        this.setState({
            items: [
                ...this.state.items,
                {
                    id: uuidv4(),
                    task,
                    complete: false
                }
            ]
        });
    }

    render() {
        return (<div className="Todo">
                <h1>New Task:</h1>

                <TodoForm addTask={this.addTask}/>
                <List items={this.state.items} markAsCompleted={this.markAsCompleted} removeTask = {this.removeTask}/>
            </div>
        );
    }

    markAsCompleted = id => {

        const items =this.state.items.map(item =>{
            // Finding the task by id...
            // Updating the completed status...
            if(item.id === id)
                item.completed = true;
            return item;
        })

        // Updating the state with the new updated task...
        this.setState({
            items: items
        });
        return;
    }

    removeTask = id => {
        // Filtering the tasks by removing the specific task id...
        const filteredTasks = this.state.items.filter(
            task => task.id !== id
        );

        // Updating items state...
        this.setState({
            items: filteredTasks
        });
        return;
    }
}

export default Todo;
