import React, {useState} from "react"

export default function PopupWithForm({name, title, children, isOpen, onClose, onSubmit, buttonText, buttonTextLoading, isLoading}) {
        
    return (
        <div className={`popup popup_form_${name} ${isOpen && 'popup_opened'}`}>
            <div className={`popup__container popup__container-${name}`}>
                <button 
                    type="reset"
                    className="popup__close-btn"
                    aria-label="Закрыть"
                    onClick={onClose} />
                <h2 className="popup__title">{title}</h2>
                <form 
                    className="popup__form"
                    name={name}
                    onSubmit={onSubmit}>
                    <fieldset className="popup__set">
                        {children}
                        <button 
                            type="submit"
                            className="popup__submit-btn"
                            aria-label="Сохранить"
                            disabled={isLoading}>{isLoading ? `${buttonTextLoading}` : `${buttonText}`}</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}