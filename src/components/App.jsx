import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Header from './Header.jsx';
import Register from './Register.jsx'
import Login from './Login.jsx'
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import EditProfilePopup from './EditProfilePopup.jsx';
import EditAvatarPopup from './EditAvatarPopup.jsx';
import ImagePopup from './ImagePopup.jsx';
import AddPlacePopup from './AddPlacePopup.jsx';
import ConfirmPopup from './ConfirmPopup.jsx';
import { api } from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { ProtectedRouteElement } from '../utils/ProtectedRoute.jsx';
import * as auth from '../utils/auth.js'

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
    const [isLoggedin, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedin) {
            api.getInitialCards()
            .then((res) => {
                setCards(res)
            })
            .catch((error) => {
                console.log(`Ошибка загрузки карточек пользователей: ${error}`);
            })
        }
    }, [isLoggedin])

    useEffect(() => {
        if (isLoggedin) {
            api.getUserProfile()
            .then((res) => {
                setCurrentUser(res)
            })
            .catch((error) => {
                console.log(`Ошибка загрузки информации о пользователе: ${error}`);
            })
        }
    }, [isLoggedin]);

    useEffect(() => {
        tokenCheck()
    }, [])

    function tokenCheck() {
        const jwt = localStorage.getItem('jwt')
        if (jwt) {
            auth.getContent(jwt)
            .then(() => {
                setIsLoggedIn(true);
                navigate('/', {replace: true});
            })
        }
    }

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

    function handleRegister({email, password}) {
        auth.register(email, password)
        .then((res) => {
            navigate('/', {replace: true});
        })
    }

    function handleLogin({email, password}) {
        auth.authorize(email, password)
        .then((res) => {
            localStorage.setItem('jwt', res.token);
            setIsLoggedIn(true);
            tokenCheck();
            navigate('/', {replace: true});
        })
    }

    function handleSignOut() {
        
    }

    return (
        <div className="page">
                <Header />
                <CurrentUserContext.Provider value={currentUser}>
                    <Routes>
                        <Route path='/signup' element={<Register 
                            onRegister={handleRegister} />} />
                        <Route path='/signin' element={<Login 
                            onLogin={handleLogin} />} />
                        <Route path='/' element= {<ProtectedRouteElement
                            element={Main}  
                            loggedIn={isLoggedin}    
                            cards={cards}
                            onEditAvatar={handleEditAvatarClick}
                            onEditProfile={handleEditProfileClick}
                            onAddPlace={handleAddPlaceClick}
                            onCardClick={handleCardClick}
                            onCardLike={handleCardLike}
                            onCardDelete={handleDeleteCard} />}/>  
                    </Routes>
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