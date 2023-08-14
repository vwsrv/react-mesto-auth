export default function Card(props) {
    const {card, onCardClick} = props;

    function handleCardClick() {
        onCardClick(card);
    }

    return (
            <article className="element">
                <button type="button" className="element__delete-btn" aria-label="Удалить"></button>
                <img src={card.link} alt={card.title} className="element__image" onClick={ handleCardClick }/>
                <div className="element__info">  
                    <h2 className="element__title">{card.name}</h2>
                    <div className="element__button">
                        <button type="button" className="element__like-btn" aria-label="Нравится"></button>
                        <p className="element__like-counter">{card.likes.length}</p>
                    </div>
                </div>
            </article>
    )
}