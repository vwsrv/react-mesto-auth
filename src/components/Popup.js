export default class Popup {
    constructor(popupElement) {
        this._popupElement = document.querySelector(popupElement);
        this._handlerEscClose = this._handlerEscClose.bind(this);
    };

    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._handlerEscClose);
    };

    close() {
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handlerEscClose);
    };

    _handlerEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        };
    };

    setEventListeners() {
        this._popupElement.addEventListener('mousedown', (evt) => {
            if (evt.target === evt.currentTarget) {
                this.close();
            };
        });
        this._popupElement.querySelector('.popup__close-btn').addEventListener('click', () => this.close());
    };
}