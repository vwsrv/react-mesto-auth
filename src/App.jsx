import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import PopupWithForm from './components/PopupWithForm.jsx'

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true)
        document.querySelector(".popup_form_update").classList.add("popup_opened");
    }
    
    function handleEditProfileClick() {
        setEditProfilePopupOpen(true)
        document.querySelector(".popup_form_edit").classList.add("popup_opened");
    }
    
    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true)
        document.querySelector(".popup_form_add").classList.add("popup_opened");
    }

    function closeAllPopups() {
        console.log('ОШ')
        setAddPlacePopupOpen(false)
        setEditProfilePopupOpen(false)
        setEditAvatarPopupOpen(false)
    }

  return (
    <div className="page">
      <Header />
      <Main 
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />
      <PopupWithForm
        name = 'edit'
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen}
        onClose = {closeAllPopups}>
            <label htmlFor="popup__input_type_name" className="popup__field">
                <input type="text" name="name" className="popup__input popup__input_type_name" placeholder="Введите имя профиля" id="name-input" minLength="2" maxLength="40" required />
                    <span className="popup__input-error name-input-error"></span>
            </label>
            <label htmlFor="popup__input_type_description" className="popup__field">
                <input type="text" name="about" className="popup__input popup__input_type_description" placeholder="Введите описание профиля" minLength="2" maxLength="200" id="description-input" required />
                    <span className="popup__input-error description-input-error"></span>
            </label>
        </PopupWithForm>
        <PopupWithForm
        name = 'add'
        title='Добавить новое место'
        isOpen={isAddPlacePopupOpen}
        onClose = {closeAllPopups}>
            <label htmlFor="popup__input_type_title" className="popup__field">
                    <input type="text" name="name" className="popup__input popup__input_type_title" placeholder="Название" minLength="2" maxLength="30" id="title-input" required />
                    <span className="popup__input-error title-input-error"></span>
                </label>
                <lebel htmlFor="popup__input_type_link" className="popup__field">
                    <input type="url" name="link" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" id="link-input" required />
                    <span className="popup__input-error link-input-error"></span>
            </lebel>
        </PopupWithForm>
        <PopupWithForm
        name = 'update'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose = {closeAllPopups}>
            <lebel htmlFor="popup__input_type_link" className="popup__field">
                    <input type="url" name="avatar" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" id="avatar-input" required />
                    <span className="popup__input-error avatar-input-error"></span>
            </lebel>
        </PopupWithForm>
    <template className="element-template">
        <article className="element">
            <button type="button" className="element__delete-btn" aria-label="Удалить"></button>
            <img src="#" alt="" className="element__image" />
            <div className="element__info">  
                <h2 className="element__title"></h2>
                <div className="element__button">
                    <button type="button" className="element__like-btn" aria-label="Нравится"></button>
                    <p className="element__like-counter"></p>
                </div>
            </div>
        </article>
    </template>
        <script type="module" src="./pages/index.js"></script>
  </div>
  )
}

export default App
