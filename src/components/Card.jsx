import { useState } from "react"

export default function Card() {
    

    return (
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
    )
}