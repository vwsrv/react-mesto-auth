import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ cards, isOpen, onClose, onAddPlace, isLoading }) {
    const [cardTitle, setCardTiltle] = useState('');
    const [cardLink, setCardLink] = useState('');

    useEffect(() => {
        if (isOpen, cardLink, cardTitle) {
            setCardLink('');
            setCardTiltle('');
        }
    }, [cards, isOpen])

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            link: cardLink,
            name: cardTitle
        })
    }

    return (
        <PopupWithForm
            cards={cards}
            name='add'
            title='Добавить новое место'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            buttonText='Добавить'
            buttonTextLoading='Подождите...'
            isLoading={isLoading}>
            <div htmlFor="popup__input_type_title" className="popup__field">
                <input type="text"
                    name="name"
                    className="popup__input popup__input_type_title"
                    placeholder="Название"
                    minLength="2"
                    maxLength="30"
                    id="title-input"
                    onChange={(e) => { setCardTiltle(e.target.value) }}
                    value={cardTitle}
                    required />
                <span className="popup__input-error title-input-error"></span>
            </div>
            <div htmlFor="popup__input_type_link" className="popup__field">
                <input type="url"
                    name="link"
                    className="popup__input popup__input_type_link"
                    placeholder="Ссылка на картинку"
                    id="link-input"
                    required
                    onChange={(e) => { setCardLink(e.target.value) }}
                    value={cardLink} />
                <span className="popup__input-error link-input-error"></span>
            </div>
        </PopupWithForm>
    )
}