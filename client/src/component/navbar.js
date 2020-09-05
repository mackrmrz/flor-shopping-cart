import React, { Component } from 'react';

class NavBar extends Component {
    render(){
        return(
            <nav className="navbar bg-dark">
                <div className="navbar-nav links">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>

                </div>
            </nav>
        )
    }
}

export default NavBar;