import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td>{props.task.task}</td>
        <td>{props.task.dateCreated}</td>
        <td>
            <Link to={"/edit/"+props.task._id}>
                <span className='mx-2 text-success'>
                    <i className='fas fa-pen'/>
                </span>
            </Link>
            <a href="#" onClick={() => { props.deleteTask(props.task._id) }}>
                <span className='mx-2 text-danger'>
                        <i className='fas fa-check'/>
                </span>
            </a>
        </td>
    </tr>
)

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.deleteTask = this.deleteTask.bind(this)
        this.state = {
            tasks: [],
        };

    }

    componentDidMount() {
        axios.get('http://localhost:5000/task/')
            .then(response => {
                this.setState({ tasks: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteTask(id) {
        axios.delete('http://localhost:5000/task/'+id)
            .then(response => { console.log(response.data)});

        this.setState({
            tasks: this.state.tasks.filter(el => el._id !== id)
        })
    }

    taskList() {
        return this.state.tasks.map(currentask => {
            return <Todo task={currentask} deleteTask={this.deleteTask} key={currentask._id}/>;
        })
    }

    render() {
        return (
            <div className="container">
                <h3>Simple Task management</h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Task</th>
                        <th>Deadline</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    { this.taskList() }
                    </tbody>
                </table>
            </div>
        )
    }
}