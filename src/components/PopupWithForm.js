import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupElement, handleFormSubmit) {
        super(popupElement);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popupElement.querySelector('.popup__form')
        this._submitButton = this._popupElement.querySelector('.popup__submit-btn');
        this._defaultSubmitText = this._submitButton.textContent;
        this._inputList = Array.from(this._popupElement.querySelectorAll('.popup__input'));
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = 'Подождите..';
        } else {
            this._submitButton.textContent = this._defaultSubmitText;
        }       
    }

    setEventListeners() {
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
        super.setEventListeners();
    };

    close() {
        super.close();
        this._popupForm.reset()
    }
}