import React, { useEffect, useState, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup({ name, isOpen, onClose, onSubmit }) {
    const [profileName, setName] = useState('');
    const [profileDescription, setDescription] = useState('');
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser])

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit({
          name: profileName,
          about: profileDescription,
        });
        onClose();
      } 

    return (
        <div className={`popup popup_form_${name} ${isOpen && 'popup_opened'}`}>
            <div className={'popup__container'}>
                <button type="reset" className="popup__close-btn" aria-label="Закрыть" onClick={onClose} />
                <h2 className="popup__title">Редактировать профиль</h2>
                <form className="popup__form" name={name} onSubmit={handleSubmit}>
                    <fieldset className="popup__set">
                        <div htmlFor="popup__input_type_name" className="popup__field">
                            <input type="text" name="name" className="popup__input popup__input_type_name" placeholder="Введите имя профиля" id="name-input" minLength="2" maxLength="40" 
                            defaultValue={profileName} onChange={(evt) => setName(evt.target.value)} required />
                            <span className="popup__input-error name-input-error"></span>
                        </div>
                        <div htmlFor="popup__input_type_description" className="popup__field">
                            <input type="text" name="about" className="popup__input popup__input_type_description" placeholder="Введите описание профиля" minLength="2" maxLength="200" id="description-input" 
                            defaultValue={profileDescription} onChange={(evt) => setDescription(evt.target.value)} required />
                            <span className="popup__input-error description-input-error"></span>
                        </div>
                        <button type="submit" className="popup__submit-btn" aria-label="Сохранить">Сохранить</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}