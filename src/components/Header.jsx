import React from "react";
import {NavLink} from 'react-router-dom'
import headerLogo from '../images/header-logo.svg'

export default function Header() {
    return (
        <header className="header">
            <img src={headerLogo}
                alt="Лого"
                className="header__logo" />
            <div className="header__container">
                <p className="header__user-email"></p>
                <NavLink to='/signin' className="header__button"></NavLink>
            </div>
        </header>
    );
}