import React, { useEffect, useState } from "react"
import {api} from '../utils/Api.js'

export default function Main(props) {

    const {onEditProfile, onAddPlace, onEditAvatar} = props;
    const [userData, setUserData] = useState({});
    const [cards, setUsersCards] = useState([]);

    useEffect(() => {
        api.getUserProfile()
        .then((res) => {
            setUserData(res)
        })
        .catch((error) => {
            console.log(`Ошибка загрузки информации о пользователе: ${error}`);
        })
    }, []);

    useEffect(() => {
        api.getInitialCards()
        .then((res) => {
            console.log(res)
            setUsersCards(res)
        })
        .catch((error) => {
            console.log(`Ошибка загрузки карточек пользователей: ${error}`);
        })
    }, [])
    
    return(
        <>
        <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <img alt="Мужик" className="profile__avatar-image" src={userData.avatar} />
                    <button className="profile__avatar-btn" onClick={onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userData.name}</h1>
                    <button type="button" className="profile__button-edit" aria-label="Редактировать" onClick={onEditProfile}></button>
                    <p className="profile__description">{userData.about}</p>               
                </div>
                <button type="button" className="profile__button-add" aria-label="Добавить" onClick={onAddPlace}></button>
            </section>
            <section className="elements">
            {cards.map(card => (
                    <article key={card.id} className="element">
                        <button type="button" className="element__delete-btn" aria-label="Удалить"></button>
                        <img src={card.link} alt="" className="element__image" />
                        <div className="element__info">
                            <h2 className="element__title">{card.name}</h2>
                            <div className="element__button">
                                <button type="button" className="element__like-btn" aria-label="Нравится"></button>
                                <p className="element__like-counter">{card.likes.length}</p>
                            </div>
                        </div>
                    </article>))}
            </section>    
        </main>
        </>
    );
};