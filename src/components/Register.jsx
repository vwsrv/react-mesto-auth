import React, { useState} from "react";
import { NavLink } from "react-router-dom";

export default function Register({onRegister}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onSubmit(e) {
        e.preventDefault();
        onRegister({password, email})
    }

    return (
        <div className="auth">
            <p className="auth__title">Регистрация</p>
            <form className="auth__form"
                onSubmit={onSubmit}
            >
                <label htmlFor="user-email">
                    <input
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                        type="email" 
                        className="auth__input auth__input_type-email" 
                        placeholder="Email" />
                </label>
                <label htmlFor="user-password">
                    <input
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                        type="text" 
                        className="auth__input auth__input_type-password" 
                        placeholder="Пароль"/>
                </label>
                <button type="submit" className="auth__submit-btn">Зарегистрироваться</button>
                <div className="auth__signin">
                    <p>Уже зарегистрированы?</p>
                    <NavLink to='/signin' className="auth__login-link">Войти</NavLink>
                </div>
            </form>
        </div>
    )
}

