import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import headerLogo from '../images/header-logo.svg'
import { Routes, Route } from "react-router-dom";

export default function Header({ onSignOut, email }) {
    const [isActiveMenu, setIsActiveMenu] = useState(false);

    function handleOpenHeaderMenu() {
        setIsActiveMenu(!isActiveMenu)
    }

    return (
        <Routes>
            <Route path='/' element={
                <header className={isActiveMenu ? "header header_type-mobile" : "header"}>
                    <img src={headerLogo}
                        alt="Лого"
                        className="header__logo" />
                    <div className={isActiveMenu ? 'header__container header__container_type-mobile' : 'header__container'}>
                        <p className="header__user-email">{email}</p>
                        <NavLink to='/signin' className="header__button" onClick={onSignOut}>Выйти</NavLink>
                    </div>
                    <button className={isActiveMenu ? "header__menu header__menu_active" : 'header__menu'}
                        onClick={handleOpenHeaderMenu}>
                        <span className="header__menu-line"></span>
                        <span className="header__menu-line"></span>
                        <span className="header__menu-line"></span>
                    </button>
                </header>
            }>
            </Route>
            <Route path='/signup' element={
                <header className="header">
                    <img src={headerLogo}
                        alt="Лого"
                        className="header__logo" />
                    <div className="header__container">
                        <p className="header__user-email"></p>
                        <NavLink to='/signin' className="header__button_active">Войти</NavLink>
                    </div>
                </header>
            }>
            </Route>
            <Route path='/signin' element={
                <header className="header">
                    <img src={headerLogo}
                        alt="Лого"
                        className="header__logo" />
                    <div className="header__container">
                        <p className="header__user-email"></p>
                        <NavLink to='/signup' className="header__button_active">Регистрация</NavLink>
                    </div>
                </header>
            }>
            </Route>
        </Routes>
    );
}