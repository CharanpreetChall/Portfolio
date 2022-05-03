import React from 'react';
import './Nav.scss';
import { Link, NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav className="nav">

            <Link className="nav__logo" to='/'>C H A R A N P R E E T</Link>

            <div className="nav__list">
                <NavLink className="nav__link" to='/'>PROJECTS</NavLink>
                <NavLink className="nav__link" to='/'>TECH STACK</NavLink>
                <NavLink className="nav__link" to='/'>CONTACT</NavLink>
            </div>

        </nav>
    )
}

export default Nav
