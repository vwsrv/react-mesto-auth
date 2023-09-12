import React, {useState} from "react";
import { useNavigate, NavLink } from "react-router-dom";

export default function Login({onLogin}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function onSubmit(e) {
        e.preventDefault();
        onLogin({email, password})
    }

    return (
        <div className="auth">
            <p className="auth__title">Вход</p>
            <form className="auth__form"
                onSubmit={onSubmit}>
                <label htmlFor="user-email">
                    <input 
                        onChange={(e) => {setEmail(e.target.value)}}
                        value={email}
                        type="email" 
                        className="auth__input auth__input_type-email" 
                        placeholder="Email" />
                </label>
                <label htmlFor="user-password">
                    <input
                        onChange={(e) => {setPassword(e.target.value)}}
                        value={password}
                        type="text" 
                        className="auth__input auth__input_type-password" 
                        placeholder="Пароль"/>
                </label>
                <button type="submit" className="auth__submit-btn">Войти</button>
            </form>
        </div>
    )
}