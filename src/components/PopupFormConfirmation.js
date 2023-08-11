import Popup from "./Popup.js";

export default class PopupFormConfirmation extends Popup {
    constructor(_popupElement, handleFormSubmit) {
        super(_popupElement);
        this._handleFormSubmit = handleFormSubmit;
        this._submitButton = this._popupElement.querySelector('.popup__submit-btn');
        this._defaultSubmitText = this._submitButton.textContent;
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = 'Удаление...';
        } else {
            this._submitButton.textContent = this._defaultSubmitText;
        }       
    }

    setHandleConfirm(handleFormSubmit) {
        this._handleFormSubmit = handleFormSubmit;
    }

    _checkHandleConfirm() {
        if (this._handleFormSubmit) {
            this._handleFormSubmit();
        }
    }

    setEventListeners() {
        this._submitButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._checkHandleConfirm();
        });
        super.setEventListeners();
    }
}