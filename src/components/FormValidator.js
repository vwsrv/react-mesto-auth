export default class FormValidator{
    constructor(formElement, validationConfig) {
        this._formElement = formElement;
        this._validationConfig = validationConfig;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._validationConfig.submitButtonSelector);
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._validationConfig.inputErrorClass);
        errorElement.classList.add(this._validationConfig.errorClass);
        errorElement.textContent = errorMessage;
    }

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._validationConfig.inputErrorClass);
        errorElement.classList.remove(this._validationConfig.errorClass);
        errorElement.textContent = '';
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _setEventListeners () {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState()
            });
        });
    };

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        }); 
    }

    resetValidationState() {
        this._inputList.forEach((inputElement) => {
          this._hideInputError(inputElement);
        });
        this._toggleButtonState();
    }

    _enablePopupButton() {
        this._buttonElement.classList.add(this._validationConfig.inactiveButtonClass);
        this._buttonElement.setAttribute('disabled', true);
    }
      
    _disablePopupButton() {
        this._buttonElement.classList.remove(this._validationConfig.inactiveButtonClass);
        this._buttonElement.removeAttribute('disabled', false);
    }

    _toggleButtonState = () => {
        if (this._hasInvalidInput()) {
          this._enablePopupButton();
        } else {
          this._disablePopupButton();
        }
    };

    enableValidation() {
          this._setEventListeners();
    }
}
