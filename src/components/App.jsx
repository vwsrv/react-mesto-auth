import { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import EditProfilePopup from './EditProfilePopup.jsx';
import EditAvatarPopup from './EditAvatarPopup.jsx';
import ImagePopup from './ImagePopup.jsx';
import AddPlacePopup from './AddPlacePopup.jsx';
import ConfirmPopup from './ConfirmPopup.jsx';
import { api } from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
    const [isConfirmChangesPopupOpen, setConfirmChangesPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);
    const [cardToDelete, setCardToDelete] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

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
        setEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
    }

    function handleCardClick(cardData) {
        setSelectedCard(cardData);
    }

    function handleDeletePopupOpen() {
        setConfirmChangesPopupOpen(true);
    }

    function handleDeletePopupClose() {
        setConfirmChangesPopupOpen(false);
    }

    function closeAllPopups() {
        setAddPlacePopupOpen(false);
        setEditProfilePopupOpen(false);
        setEditAvatarPopupOpen(false);
        setConfirmChangesPopupOpen(false);
        setSelectedCard(null);
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeStatus(card._id, isLiked)
            .then((newCard) => {
                setCards((state) => state.map((cardItem) => cardItem._id === card._id ? newCard : cardItem));
            })
            .catch((err) => {
                console.log(`Возникла ошибка при постановке лайка карточке: ${err}`)
            });
    }
    
    function handleDeleteConfirmation() {
        if (cardToDelete) {
            setIsLoading(true);
            api.deleteUserCard(cardToDelete._id)
            .then(() => {
                setCards((cards) => cards.filter((cardItem) => cardToDelete._id !== cardItem._id));
                handleDeletePopupClose();
                setCardToDelete(null);
            })
            .catch((err) => {
                console.log(`Возникла ошибка при удалении карточки: ${err}`)
            })
            .finally(() => {
                setIsLoading(false)
            });
        }
    }

    function handleDeleteCard(cardElement) {
        setCardToDelete(cardElement);
        handleDeletePopupOpen();
    }

    function handleUpdateUser(userData) {
        setIsLoading(true)
        api.setUserProfile({ userData })
            .then((updatedUserData) => {
                setCurrentUser(updatedUserData)
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`Возникла ошибка при изменении профеля: ${err}`)
            })
            .finally(() => {
                setIsLoading(false)
            });
    }

    function handleUpdateAvatar(userData) {
        setIsLoading(true)
        api.setUserProfileAvatar({ userData })
            .then((updatedUserAvatar) => {
                setCurrentUser(updatedUserAvatar);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`Возникла ошибка при обновалении автаара: ${err}`)
            })
            .finally(() => {
                setIsLoading(false)
            });
    }

    function handleAddPlaceSubmit(cardData) {
        setIsLoading(true)
        api.setUserCard({ cardData })
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`Возникла ошибка при добавлении карточки: ${err}`)
            })
            .finally(() => {
                setIsLoading(false)
            });
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
                    isLoading={isLoading}
                />
                <ImagePopup
                    card={selectedCard}
                    onClose={closeAllPopups}
                />
                <EditAvatarPopup
                    onClose={closeAllPopups}
                    isOpen={isEditAvatarPopupOpen}
                    onUpdateAvatar={handleUpdateAvatar}
                    isLoading={isLoading}
                />
                <AddPlacePopup
                    cards={cards}
                    onClose={closeAllPopups}
                    isOpen={isAddPlacePopupOpen}
                    onAddPlace={handleAddPlaceSubmit}
                    isLoading={isLoading}
                />
                <ConfirmPopup
                    cards={cards}
                    isLoading={isLoading}
                    isOpen={isConfirmChangesPopupOpen}
                    onClose={closeAllPopups}
                    handleSubmit={handleDeleteConfirmation}
                />
            </CurrentUserContext.Provider>
        </div>
    )
}

export default App
