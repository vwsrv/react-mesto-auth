import React from "react"

function PopupElement(props) {
    return( 
        <div className={`popup popup_form_${props.name}`}>
            <div className="popup__container">
                <button type="reset" className="popup__close-btn" aria-label="Закрыть"></button>
                <h2 className="popup__title">Редактировать профиль</h2>
                <form className="popup__form" id ="popup__form_edit" name={props.name} noValidate>
                    <fieldset className="popup__set">
                        <label htmlFor="popup__input_type_name" className="popup__field">
                            <input type="text" name="name" className="popup__input popup__input_type_name" placeholder="Введите имя профиля" id="name-input" minLength="2" maxLength="40" required />
                            <span className="popup__input-error name-input-error"></span>
                        </label>
                        <label htmlFor="popup__input_type_description" className="popup__field">
                            <input type="text" name="about" className="popup__input popup__input_type_description" placeholder="Введите описание профиля" minLength="2" maxLength="200" id="description-input" required />
                            <span className="popup__input-error description-input-error"></span>
                        </label>
                        <button type="submit" className="popup__submit-btn" aria-label="Сохранить">Сохранить</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}





<div className={`popup popup_form_${props.name}`}>
    <div className="popup__container">
        <button type="reset" className="popup__close-btn" aria-label="Закрыть"></button>
        <h2 className="popup__title">Редактировать профиль</h2>
        <form className="popup__form" id ="popup__form_edit" name={props.name} noValidate>
            <fieldset className="popup__set">
                <label htmlFor="popup__input_type_name" className="popup__field">
                    <input type="text" name="name" className="popup__input popup__input_type_name" placeholder="Введите имя профиля" id="name-input" minLength="2" maxLength="40" required />
                    <span className="popup__input-error name-input-error"></span>
                </label>
                <label htmlFor="popup__input_type_description" className="popup__field">
                    <input type="text" name="about" className="popup__input popup__input_type_description" placeholder="Введите описание профиля" minLength="2" maxLength="200" id="description-input" required />
                    <span className="popup__input-error description-input-error"></span>
                </label>
                <button type="submit" className="popup__submit-btn" aria-label="Сохранить">Сохранить</button>
            </fieldset>
        </form>
    </div>
</div>

<div className={`popup popup_form_${props.name}`}>
    <div className="popup__container">
        <button type="reset" className="popup__close-btn" aria-label="Закрыть"></button>
        <h2 className="popup__title popup__title_edit">Новое место</h2>
        <form className="popup__form" id ="popup__form_add" name={props.name} noValidate>
            <fieldset className="popup__set">
                <label htmlFor="popup__input_type_title" className="popup__field">
                    <input type="text" name="name" className="popup__input popup__input_type_title" placeholder="Название" minLength="2" maxLength="30" id="title-input" required />
                    <span className="popup__input-error title-input-error"></span>
                </label>
                <lebel htmlFor="popup__input_type_link" className="popup__field">
                    <input type="url" name="link" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" id="link-input" required />
                    <span className="popup__input-error link-input-error"></span>
                </lebel>
                <button type="submit" className="popup__submit-btn" aria-label="Сохранить">Создать</button>
        </fieldset>
        </form>
    </div>
</div>

<div className={`popup popup_form_${props.name}`}>
    <div className="popup__container popup__container-confirm">
        <button type="reset" className="popup__close-btn" aria-label="Закрыть"></button>
            <h2 className="popup__title popup__title_confirm">Вы уверены?</h2>
            <form className="popup__form" id ="popup__form_confirm" name={props.name} noValidate>
                <button type="submit" className="popup__submit-btn" aria-label="Сохранить">Да</button>
            </form>
    </div>
</div>


<div className={`popup popup_form_${props.name}`}>
    <div className="popup__container popup__container-update">
        <button type="reset" className="popup__close-btn" aria-label="Закрыть"></button>
        <h2 className="popup__title popup__title_update">Обновить аватар</h2>
        <form className="popup__form" id ="popup__form_update" name={props.name} noValidate>
            <fieldset className="popup__set">
                <lebel htmlFor="popup__input_type_link" className="popup__field">
                    <input type="url" name="avatar" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" id="avatar-input" required />
                    <span className="popup__input-error avatar-input-error"></span>
                </lebel>
                <button type="submit" className="popup__submit-btn" aria-label="Сохранить">Сохранить</button>
        </fieldset>
        </form>
    </div>
</div>