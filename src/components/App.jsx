import { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import PopupWithForm from './PopupWithForm.jsx';
import EditProfilePopup from './EditProfilePopup.jsx';
import EditAvatarPopup from './EditAvatarPopup.jsx';
import ImagePopup from './ImagePopup.jsx';
import { api } from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getInitialCards()
            .then((res) => {
                setCards(res)
            })
            .catch((error) => {
                console.log(`Ошибка загрузки карточек пользователей: ${error}`);
            })
    }, [])

    useEffect(() => {
        api.getUserProfile()
            .then((res) => {
                setCurrentUser(res)
            })
            .catch((error) => {
                console.log(`Ошибка загрузки информации о пользователе: ${error}`);
            })
    }, []);

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true)
    }

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true)
    }

    function handleCardClick(cardData) {
        setSelectedCard(cardData)
    }

    function closeAllPopups() {
        setAddPlacePopupOpen(false)
        setEditProfilePopupOpen(false)
        setEditAvatarPopupOpen(false)
        setSelectedCard(null);
    }

    
    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeStatus(card._id, isLiked)
            .then((newCard) => {
                setCards((state) => state.map((cardItem) => cardItem._id === card._id ? newCard : cardItem));
            });
    }

    function handleDeleteCard(card) {
        api.deleteUserCard(card._id)
            .then(() => {
                setCards((cards) => cards.filter((cardItem) => card._id !== cardItem._id))
            })
    }
    
    function handleUpdateUser(userData) {
        api.setUserProfile({userData})
        .then((updatedUserData) => {
            setCurrentUser(updatedUserData)
        })
    }

    function handleUpdateAvatar(userData) {
        api.setUserProfileAvatar({userData})
        .then((updatedUserAvatar) => {
            setCurrentUser(updatedUserAvatar)
        })
    }

    return (
        <div className="page">
            <Header />
            <CurrentUserContext.Provider value={currentUser}>
                <Main
                    cards={cards}
                    onEditAvatar={handleEditAvatarClick}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                    onCardDelete={handleDeleteCard}
                />
            <Footer />
            <EditProfilePopup
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups} 
                onUpdateUser={handleUpdateUser}
            />
            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}
            />
            <EditAvatarPopup
                onClose={closeAllPopups}
                isOpen={isEditAvatarPopupOpen}
                onUpdateAvatar={handleUpdateAvatar} 
            />
            </CurrentUserContext.Provider>






            <PopupWithForm
                name='add'
                title='Добавить новое место'
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}>
                <div htmlFor="popup__input_type_title" className="popup__field">
                    <input type="text" name="name" className="popup__input popup__input_type_title" placeholder="Название" minLength="2" maxLength="30" id="title-input" required />
                    <span className="popup__input-error title-input-error"></span>
                </div>
                <div htmlFor="popup__input_type_link" className="popup__field">
                    <input type="url" name="link" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" id="link-input" required />
                    <span className="popup__input-error link-input-error"></span>
                </div>
            </PopupWithForm>
        </div>
    )
}

export default App
