import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Friends from "./Friends/Friends";

const Navbar = (props) => {


    let friendElements = props.state.map(f => <Friends name={f.name} id={f.id} />);

    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/dialogs" activeClassName={s.activeLink} >Messages</NavLink>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
        <div className={s.item}>
            <a>Friends</a>
            <div className={s.friends__container}>
                { friendElements }
            </div>
        </div>
    </nav>
}

export default Navbar;