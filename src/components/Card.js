export default class Card {
    constructor(elementsData, currentUserId, templateSelector, {handleOpenImage, handleDeleteCardElement, handleLikeElement}) {
        this._name = elementsData.name;
        this._link = elementsData.link;
        this._likes = elementsData.likes;
        this._cardId = elementsData._id;
        this._ownerId = elementsData.owner._id;
        this._currentId = currentUserId
        this._templateSelector = templateSelector;
        this._handleOpenImage = handleOpenImage;
        this._handleDeleteCardElement = handleDeleteCardElement;
        this._handleLikeElement = handleLikeElement;
    }

    _getTemplate() {
      const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
      return cardElement;
    }

    _checkCardOwner() {
        if (this._currentId !== this._ownerId) {
            this._element.querySelector('.element__delete-btn').remove();
        }
    }

    _checkLikeStatus() {
        if (this._likes.some((like) => like._id === this._currentId)) {
            this._likeCardElement()
        }
    }

    _likeCardElement() {
        if (this._likeButton.classList.contains('element__like-btn_active')) {
            this._handleLikeElement(this._cardId, true);
        } else {
            this._handleLikeElement(this._cardId, false);
        }
    }

    setLikesCounter(likesData) {
        this._element.querySelector('.element__like-counter').textContent = likesData.likes.length;
    }

    likeCardElement() {
        this._likeButton.classList.add('element__like-btn_active');
    }

    dislikeCardElement() {
        this._likeButton.classList.remove('element__like-btn_active');
    }

    deleteCardElement() {
        this._element.remove();
        this._element = null;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._likeButton = this._element.querySelector('.element__like-btn');
        this._elementImage = this._element.querySelector('.element__image');

        this._element.querySelector('.element__like-counter').textContent = this._likes.length;
        this._element.querySelector('.element__title').textContent = this._name;
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;

        this._checkCardOwner();
        this._checkLikeStatus();
        this._setEventListeners();
        return this._element;
    }

    _setEventListeners = () => {
        this._likeButton.addEventListener('click', () => {
            this._likeCardElement();
        });

        if (this._element.querySelector('.element__delete-btn')) {
            this._element.querySelector('.element__delete-btn').addEventListener('click', () => {
            this._handleDeleteCardElement(this._cardId)
        })};

        this._elementImage.addEventListener('click', () => { 
            this._handleOpenImage(this._link, this._name); 
        }); 
    }
}
