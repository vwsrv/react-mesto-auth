import React from "react";

export default function ImagePopup() {
    return( 
        <div className="popup popup_form_image">
            <div className="popup__container-image">
                <button type="reset" className="popup__close-btn" aria-label="Закрыть"></button>
                <img src="#" alt="Модальное изображение" className="popup__picture" />
                <p className="popup__caption"></p>
            </div>
        </div>
    )
}