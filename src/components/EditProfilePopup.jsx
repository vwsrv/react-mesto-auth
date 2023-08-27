import React, { useEffect, useState, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup({ isOpen, onClose, onSubmit }) {
    const [profileName, setName] = useState('');
    const [profileDescription, setDescription] = useState('');
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser])

    function onChange(e) {
        setName(e.target.value);
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit({
            name: profileName,
            about: profileDescription,
        });
        onClose();
    }

    return (
        <PopupWithForm
            name='edit'
            title='Редактировать профиль'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}>
            <div htmlFor="popup__input_type_name" className="popup__field">
                <input type="text"
                    name="name"
                    className="popup__input popup__input_type_name"
                    placeholder="Введите имя профиля" id="name-input"
                    minLength="2"
                    maxLength="40"
                    onChange={onChange}
                    defaultValue={profileName} required />
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
                    onChange={(evt) => setDescription(evt.target.value)} defaultValue={profileDescription} required />
                <span className="popup__input-error description-input-error"></span>
            </div>
        </PopupWithForm>
    )
}