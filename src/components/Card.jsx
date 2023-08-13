import { useState } from "react"

export default function Card(props) {
    const {cardId, cardName, cardImage, cardLikes} = props;

    return (
            <article key={cardId} className="element">
                <button type="button" className="element__delete-btn" aria-label="Удалить"></button>
                <img src={cardImage} alt="" className="element__image" />
                <div className="element__info">  
                    <h2 className="element__title">{cardName}</h2>
                    <div className="element__button">
                        <button type="button" className="element__like-btn" aria-label="Нравится"></button>
                        <p className="element__like-counter">{cardLikes}</p>
                    </div>
                </div>
            </article>
    )
}