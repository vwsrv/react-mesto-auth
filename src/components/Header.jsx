import React from "react";
import {NavLink} from 'react-router-dom'
import headerLogo from '../images/header-logo.svg'

export default function Header({isLoggedIn}) {
    return (
        <header className="header">
            <img src={headerLogo}
                alt="Лого"
                className="header__logo" />
            <div className="header__container">
                {isLoggedIn && <p className="header__user-email">554442mvd@mail.ru</p>}
                {isLoggedIn && <NavLink to='/sign-up' className="header__button">Выйти</NavLink>}
            </div>
        </header>
    );
}