import React, { useEffect, useState } from "react"
import {api} from '../utils/Api.js'
import Card from '../components/Card.jsx'

export default function Main(props) {

    const {onEditProfile, onAddPlace, onEditAvatar, onCardClick} = props;
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
                <Card
                    card = {card}
                    onCardClick = {onCardClick}
                />))}
            </section>
        </main>
        </>
    );
};