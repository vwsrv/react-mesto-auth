import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {  
    constructor(_popupElement) {
        super(_popupElement);
        this._elementCaption = this._popupElement.querySelector('.popup__caption');
        this._elementPicture = this._popupElement.querySelector('.popup__picture');
    }
    
    open(link, name) {
        this._elementCaption.textContent = name;
        this._elementPicture.alt = name;
        this._elementPicture.src = link;
        super.open();
    }
}