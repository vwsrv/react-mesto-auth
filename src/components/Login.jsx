import React from "react";

export default function Login() {
    const [email, setUserEmail] = useState('');
    const [password, setUserPassword] = useState('');


    function onSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="auth">
            <p className="auth__title">Вход</p>
            <form className="auth__form" onSubmit={onSubmit}>
                <label htmlFor="user-email">
                    <input 
                        onChange={(e) => {setUserEmail(e.target.value)}}
                        type="email" 
                        className="auth__input auth__input_type-email" 
                        placeholder="Email" />
                </label>
                <label htmlFor="user-password">
                    <input
                        onChange={(e) => {setUserPassword(e.target.value)}}
                        type="text" 
                        className="auth__input auth__input_type-password" 
                        placeholder="Пароль"/>
                </label>
                <button type="submit" className="auth__submit-btn">Войти</button>
            </form>
        </div>
    )
}