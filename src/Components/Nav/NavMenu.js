import { HashLink as NavLink } from "react-router-hash-link";

export function NavMenu() {
    return (
        <div className="nav__list">
            <NavLink className="nav__link" smooth to='#projects' >PROJECTS</NavLink>
            <NavLink className="nav__link" smooth to='#tech'>TECH STACK</NavLink>
            <NavLink className="nav__link" smooth to='#contact'>CONTACT</NavLink>
        </div>
    )
}
