import PopupWithForm from "./PopupWithForm.jsx";
import React from 'react';

export default function ConfirmPopup({ isOpen, isLoading, onClose, handleSubmit }) {

    function handleSubmitt(e) {
        e.preventDefault()
        handleSubmit()
    }

    return (
        <PopupWithForm
            name='confirm'
            title='Вы уверены'
            isOpen={isOpen}
            onClose={onClose}
            buttonText='Да'
            buttonTextLoading='Удаление...'
            isLoading={isLoading}
            onSubmit={handleSubmitt}
        >
        </PopupWithForm>
    )
}