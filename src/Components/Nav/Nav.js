import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import './Nav.scss';
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';


export class Nav extends Component {

    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {

        return (
            <nav className="nav">

                <NavLink className="nav__logo" to="/" onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}>CHARANPREET</NavLink>

                <div>
                    <div className="nav__bars" onClick={this.handleClick} >
                        {this.state.clicked ?
                            <div className="nav__open">
                                <FaTimes />
                                <NavMenu />
                            </div>
                            :
                            <FaBars />
                        }
                    </div>
                </div>

                <div className="nav__menu">
                    <NavMenu />
                </div>
            </nav>
        )
    }
}

export default Nav;
