import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class TodoInput extends Component {
    constructor(props) {
        super(props);

        this.onChangeTask = this.onChangeTask.bind(this);
        this.onChangeCompleted = this.onChangeCompleted.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            task: '',
            completed: false,
            dateCreated: new Date(),
            tasks: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/task/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        tasks: response.data.map(tasks => tasks.task),
                        task: response.data[0].task
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    onChangeTask(e) {
        this.setState({
            task: e.target.value
        })
    }

    onChangeCompleted(e) {
        this.setState({
            completed: e.target.value
        })
    }

    onChangeDate(dateCreated) {
        // const date = useState(new Date())
        this.setState({
            dateCreated: dateCreated
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const newTask = {
            task: this.state.task,
            completed: this.state.completed,
            dateCreated: this.state.dateCreated
        }

        console.log(newTask);

        axios.post('http://localhost:5000/task/add', newTask)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <div className= "container">
                <h3>Add a new Task</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Task: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.task}
                                onChange={this.onChangeTask}
                        />

                    </div>
                    <div className="form-group">
                        <label>Status: </label>
                        <select required
                                className="form-control"
                                value={this.state.completed}
                                onChange={this.onChangeCompleted}>
                            <option value={true}>Completed</option>
                            <option value={false}>not Completed</option>

                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            {/*<input  type="text"*/}
                            {/*        required*/}
                            {/*        className="form-control"*/}
                            {/*        value={this.state.dateCreated}*/}
                            {/*        onChange={this.onChangeDate}*/}
                            {/*/>*/}
                            <DatePicker
                                selected={this.state.dateCreated}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}