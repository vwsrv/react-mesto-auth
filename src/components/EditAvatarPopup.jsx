import React, { useEffect, useState, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const [profileAvatar, setUserAvatar] = useState('');
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setUserAvatar(currentUser.avatar)
    }, [currentUser]);

    function onChange(e) {
        setUserAvatar(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: profileAvatar
        });
        onClose();
    };

    return (
        <PopupWithForm
            name='update'
            title='Обновить аватар'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <div htmlFor="popup__input_type_link" className="popup__field">
                <input type="url"
                    name="avatar"
                    className="popup__input popup__input_type_link"
                    placeholder="Ссылка на картинку"
                    id="avatar-input"
                    onChange={onChange}
                    required />
                <span className="popup__input-error avatar-input-error"></span>
            </div>
        </PopupWithForm>
    )
}