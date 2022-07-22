import './Card.scss'
import { HiPlus } from 'react-icons/hi'

const Card = () => {
  return (
    <article className='card'>
      <div className='card__wrapper'>
        <div className='card__img'></div>
        <p className='card__text'>Мужские Кроссовки Nike Blazer Mid Suede</p>
        <div className='card__footer footer-card'>
          <div className='footer-card__text'>
            <span>Цена:</span>
            <b>12 999 руб</b>
          </div>
          <button className='footer-card__button'>
            <HiPlus />
          </button>
        </div>
      </div>
    </article>
  )
}

export default Card
