import React from "react"

export default function PopupWithForm(props) {
    const {name, title, children, isOpen, onClose, onSubmit } = props;

    return( 
        <div className={`popup popup_form_${name} ${isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button type="reset" className="popup__close-btn" aria-label="Закрыть" onClick={onClose}></button>
                <h2 className="popup__title">{title}</h2>
                <form className="popup__form" id ="popup__form_edit" name={name} noValidate>
                    <fieldset className="popup__set">
                        {children}
                        <button type="submit" className="popup__submit-btn" aria-label="Сохранить" onSubmit={onSubmit}>Сохранить</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}