export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_inactive',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__error_visible',
    likeClass: '.element__like-counter'
  }

export const projectToken = '286e65cb-598a-4a43-9bc6-d7bbdd44ff1c';
export const elementsContainer = document.querySelector('.elements');
export const popupFormEdit = document.querySelector('.popup_form_edit');
export const closeButtonEdit = popupFormEdit.querySelector('.popup__close-btn');
export const editButton = document.querySelector('.profile__button-edit');
export const newName = popupFormEdit.querySelector(".popup__input_type_name");
export const newDescription = popupFormEdit.querySelector(".popup__input_type_description");
export const defaultName = document.querySelector('.profile__name');
export const defaultDescription = document.querySelector(".profile__description");
export const formEditProfile = document.querySelector('#popup__form_edit');
export const popupFormAdd = document.querySelector('.popup_form_add');
export const formAddCard = document.querySelector('#popup__form_add');
export const addButton = document.querySelector('.profile__button-add');
export const elementLink = document.querySelector('.popup__input_type_link');
export const elementTitle = document.querySelector('.popup__input_type_title');
export const elements = document.querySelector('.elements');
export const imageForm = document.querySelector('.popup_form_image');
export const popupPicture = document.querySelector('.popup__picture');
export const popupCaption = document.querySelector('.popup__caption');
export const popupFormUpdate = document.querySelector('.popup_form_update');
export const updateAvatarButton = document.querySelector('.profile__avatar-btn');
export const likeCounterStatus = document.querySelector('.element__like-counter');
export const submitButton = document.querySelector('.popup__submit-btn')
export const likeButton = document.querySelector('.element__like-btn')