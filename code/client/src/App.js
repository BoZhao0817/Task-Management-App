import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import TodoInput from "./components/TodoInput";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from "./components/TodoList";
import TodoEdit from "./components/TodoEdit";


function App() {
    return(
        <Router>
            <div className= 'container'>
                <Navbar/>
                <br/>
                <Route path ='/' exact component = {TodoList}/>
                <Route path= '/edit/:id' component={TodoEdit}/>
                <Route path = '/create' component={TodoInput}/>
            </div>
        </Router>
    )

}

export default App;




