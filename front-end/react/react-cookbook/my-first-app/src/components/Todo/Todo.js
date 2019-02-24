import React, {Component} from 'react';
import uuidv4 from 'uuid/v4';
import List from './List';
import './Todo.css';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            task: '',
            items: []
        };
    }

    componentWillMount() {
        this.setState({
            items: [
                {
                    id: uuidv4(),
                    task: 'Pay the rent',
                    completed: false
                },
                {
                    id: uuidv4(),
                    task: 'Go to the gym',
                    completed: false
                },
                {
                    id: uuidv4(),
                    task: 'Do my homework',
                    completed: false
                }
            ]
        });
    }

    render() {
        return (
            <div className="Todo">
                <h1>New Task:</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <input
                        value={this.state.task}
                        onChange={this.handleOnChange}
                    />
                </form>

                <List
                    items={this.state.items}
                    markAsCompleted={this.markAsCompleted}
                    removeTask={this.removeTask}
                />
            </div>
        );
    }

    handleOnChange = e => {
        const {target: {value}} = e;
        // Updating our task state with the input value...
        this.setState({
            task: value
        });
    }

    handleOnSubmit = e => {
        // Prevent default to avoid the actual form submit...
        e.preventDefault();

        // Once is submited we reset the task value and we push
        // the new task to the items array.
        if (this.state.task.trim() !== '') {
            this.setState({
                task: '',
                items: [
                    ...this.state.items,
                    {
                        id: uuidv4(),
                        task: this.state.task,
                        complete: false
                    }
                ]
            });
        }
    }

    markAsCompleted = id => {
        // Finding the task by id...

        const newItems = this.state.items.map( item =>{
            if(item.id === id){
                item.completed = true;
            }
            return item;
        });

        // Updating the state with the new updated task...
        this.setState({
            items: newItems
        });
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
    }
}

export default Todo;