import React, { useEffect, useState, useContext, useRef } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
    const [profileName, setName] = useState('');
    const [profileDescription, setDescription] = useState('');
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen])

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name: profileName,
            about: profileDescription,
        });
    }

    return (
        <PopupWithForm
            name='edit'
            title='Редактировать профиль'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            buttonText='Сохранить'
            buttonTextLoading='Сохранение...'
            isLoading={isLoading}>
            <div htmlFor="popup__input_type_name" className="popup__field">
                <input type="text"
                    name="name"
                    className="popup__input popup__input_type_name"
                    placeholder="Введите имя профиля" id="name-input"
                    minLength="2"
                    maxLength="40"
                    onChange={(e) => { setName(e.target.value) }}
                    value={profileName || ''} required />
                <span className="popup__input-error name-input-error"></span>
            </div>
            <div htmlFor="popup__input_type_description" className="popup__field">
                <input type="text"
                    name="about"
                    className="popup__input popup__input_type_description"
                    placeholder="Введите описание профиля"
                    minLength="2"
                    maxLength="200"
                    id="description-input"
                    onChange={(e) => { setDescription(e.target.value) }}
                    value={profileDescription || ''} required />
                <span className="popup__input-error description-input-error"></span>
            </div>
        </PopupWithForm>
    )
}