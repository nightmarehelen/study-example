import React, {Component} from 'react';
import {connect} from 'react-redux'
import TasksPage from './components/TasksPage';
import {createTask, editTask, fetchTasksStarted,filterTasks} from './actions'
import FlashMessage from "./components/FlashMessage";
import { getFilteredTasks } from './reducers/';

class App extends Component {

    onCreateTask = ({title, description}) => {
        this.props.dispatch(createTask({title, description}));
    }

    onStatusChange = (id, status) => {
        this.props.dispatch(editTask(id, status))
    }

    componentDidMount() {
        this.props.dispatch(fetchTasksStarted())
    }

    onSearch = searchTerm => {
        this.props.dispatch(filterTasks(searchTerm));
    };

    render() {
        return (
            <div className='container'>
                {this.props.error &&  <FlashMessage message={this.props.error} />}
                <div className="main-content">

                    <TasksPage tasks={this.props.tasks}
                               onCreateTask={this.onCreateTask}
                               onStatusChange={this.onStatusChange}
                               onSearch = {this.onSearch}
                               isLoading={this.props.isLoading}
                    />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {isLoading,error,searchTerm,tasks} = state.tasks;

    return {tasks:getFilteredTasks(tasks, searchTerm), isLoading,error};
}

export default connect(mapStateToProps)(App);
