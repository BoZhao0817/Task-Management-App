import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-dark bg-dark my-2 navbar-expand-lg">
                    <Link to="/" className="navbar-brand">SimpleTodo</Link>
                    <div className="collpase navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/create" className="nav-link">Add a New Todo</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;