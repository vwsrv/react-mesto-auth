import React from "react"
import defaultAvatar from '../images/profile__avatar.jpg'

export default function Main(props) {
    const {onEditProfile, onAddPlace, onEditAvatar} = props
    return(
        <>
        <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <img src={defaultAvatar} alt="Мужик" className="profile__avatar-image" />
                    <button className="profile__avatar-btn" onClick={onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <button type="button" className="profile__button-edit" aria-label="Редактировать" onClick={onEditProfile}></button>
                    <p className="profile__description">Исследователь океана</p>               
                </div>
                <button type="button" className="profile__button-add" aria-label="Добавить" onClick={onAddPlace}></button>
            </section>
            <section className="elements">
            </section>    
        </main>
        </>
    )
}