import { useState } from 'react'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />


    <div className="popup popup_form_image">
        <div className="popup__container-image">
            <button type="reset" className="popup__close-btn" aria-label="Закрыть"></button>
            <img src="#" alt="Модальное изображение" className="popup__picture" />
            <p className="popup__caption"></p>
        </div>
    </div>


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
        <script type="module" src="./pages/index.js"></script>
  </div>
  )
}

export default App
